/*
 * "Turing Complete Callables" - A small script that adds a set of patch steps for managing control flow.
 * Written starting in 2023 by ac2pic.
 * To the extent possible under law, the author(s) have dedicated all copyright and related and neighboring rights to this software to the public domain worldwide. This software is distributed without any warranty.
 * For the license, please see <https://unlicense.org/>.
 */

// Just to make sure we're working universally on both CCLoader2 and 3.
window.ccmod = window.ccmod || {};
window.ccmod.patchStepsLib = window.ccmod.patchStepsLib || window.simplifyResources.patchSteps;

/**
 * CALL step, used for calling functions defined through FUNCTION.
 *
 * @param {string} name The name of the function to call
 */
ccmod.patchStepsLib.callable.register('CALL', async function (state, args) {
  const sm = state.stepMachine;
  const memory = state.memory;
  const functionName = args['name'];
  memory.callstack = memory.callstack || [];
  memory.callstack.push({
    returnIndex: sm.getStepIndex(),
    functionName: state.functionName,
    oldReferenceIndex: state.stepReferenceIndex,
  });
  let functionIndex = sm.findLabelIndex(functionName);
  if (functionIndex == -1) {
    state.debugState.throwError('ValueError', functionName + ' does not exist.');
  }
  state.debugState.addStep(sm.getStepIndex(), 'CALL', state.functionName);
  sm.gotoLabel(functionName);
  state.functionName = functionName;
  state.stepReferenceIndex = functionIndex + 1;
});

/**
 * GOTO step, used for jumping to a LABEL.
 *
 * @param {string} name The name of the label to jump to
 */
ccmod.patchStepsLib.callable.register('GOTO', async function (state, args) {
  const sm = state.stepMachine;
  sm.setStepIndex(sm.findLabelIndex(args['name']));
});

/**
 * RETURN step, final step in a FUNCTION or IF. Should not be used manually.
 *
 * @private
 */
ccmod.patchStepsLib.callable.register('RETURN', async function (state, _args) {
  const sm = state.stepMachine;
  const memory = state.memory;

  memory.callstack = memory.callstack || [];
  let oldCallState = memory.callstack.pop();
  if (oldCallState == null) {
    sm.exit();
  } else {
    const { returnIndex, functionName, oldReferenceIndex } = oldCallState;
    state.functionName = functionName;
    state.stepReferenceIndex = oldReferenceIndex;
    sm.setStepIndex(returnIndex);
    state.debugState.removeLastStep();
  }
});

/**
 * FUNCTION step, defines a function to be called with CALL.
 *
 * @param {string} name The name of the function
 * @param {Array<object>} body The steps to run once the function is called.
 */
ccmod.patchStepsLib.callable.register('FUNCTION', async function (state, args) {
  const sm = state.stepMachine;
  const currentIndex = sm.findLabelIndex(args['name']);
  if (currentIndex > -1) {
    state.debugState.throwError('ValueError', 'Redefinining function ' + args['name']);
  }
  // New function
  const newSteps = [];
  newSteps.push({
    type: 'EXIT',
  });

  newSteps.push({
    type: 'LABEL',
    name: args['name'],
  });

  for (const step of args['body'] || []) {
    newSteps.push(step);
  }

  newSteps.push({
    type: 'RETURN',
  });
  sm.addSteps(newSteps);
});

/**
 * IF step, used for conditionals.
 *
 * @param {string?} label Internal. DO NOT SPECIFY.
 * @param {string} cond Code to be evaluated. Should be a truthy/falsy value.
 * @param {Array<object>} thenSteps Steps to run if the condition is evaluated as true.
 */
ccmod.patchStepsLib.callable.register('IF', async function (state, args) {
  const sm = state.stepMachine;
  const memory = state.memory;
  if (!args['label']) {
    args['label'] = 'IF_' + Math.round(Math.random() * 1e6);
    sm.getCurrentStep()['label'] = args['label'];
  }

  const ifLabel = args['label'];
  let ifIndex = sm.findLabelIndex(args['label']);
  if (ifIndex == -1) {
    const newSteps = [];
    newSteps.push({
      type: 'EXIT',
    });

    newSteps.push({
      type: 'LABEL',
      name: ifLabel,
    });

    for (const step of args['thenSteps'] || []) {
      newSteps.push(step);
    }

    newSteps.push({
      type: 'RETURN',
    });
    sm.addSteps(newSteps);
    ifIndex = sm.findLabelIndex(args['label']);
  }

  if (new Function(` return ${args.cond}`)()) {
    memory.callstack = memory.callstack || [];
    memory.callstack.push({
      returnIndex: sm.getStepIndex(),
      functionName: state.functionName,
      oldReferenceIndex: state.stepReferenceIndex,
    });
    state.debugState.addStep(sm.getStepIndex(), 'IF', state.functionName);
    state.stepReferenceIndex = ifIndex + 1;
    sm.gotoLabel(args['label']);
  }
});

/**
 * PRINT_STEPS, prints the steps that will be ran to the console. Requires debug mode to be enabled.
 */
ccmod.patchStepsLib.callable.register('PRINT_STEPS', async function (state, _args) {
  if (state.debug) console.log(state.stepMachine.steps);
});

/**
 * EXIT step, tells the step machine we are finished.
 */
ccmod.patchStepsLib.callable.register('EXIT', async function (state) {
  state.stepMachine.exit();
});
