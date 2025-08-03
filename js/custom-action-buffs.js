//Tribalder

sc.STAT_CHANGE_SETTINGS["ATTACK-MINUS-OVERCLOCK"] = {
  change: sc.STAT_CHANGE_TYPE.STATS,
  type: sc.STAT_PARAM_TYPE.ATTACK,
  value: 0.90,
  negative: true,
  icon: "stat-attack",
  grade: "stat-rank-down-1"
};

sc.STAT_CHANGE_SETTINGS["FOCUS-MINUS-OVERCLOCK"] = {
  change: sc.STAT_CHANGE_TYPE.STATS,
  type: sc.STAT_PARAM_TYPE.FOCUS,
  value: 0.75,
  negative: true,
  icon: "stat-focus",
  grade: "stat-rank-down-2"
};

sc.STAT_CHANGE_SETTINGS["DEFENSE-BLADEAURA"] = {
  change: sc.STAT_CHANGE_TYPE.STATS,
  type: sc.STAT_PARAM_TYPE.DEFENSE,
  value: 1.30,
  icon: "stat-defense",
  grade: "stat-rank-2"
};

sc.STAT_CHANGE_SETTINGS["DEFENSE-SHIELDS"] = {
  change: sc.STAT_CHANGE_TYPE.STATS,
  type: sc.STAT_PARAM_TYPE.DEFENSE,
  value: 1.50,
  icon: "stat-defense",
  grade: "stat-rank-3"
};

sc.STAT_CHANGE_SETTINGS["SPIKE_DMG-0"] = {
  change: sc.STAT_CHANGE_TYPE.MODIFIER,
  type: sc.STAT_PARAM_TYPE.SPIKE_DMG,
  value: -20,
  negative: true,
  icon: "stat-spike-dmg",
  grade: "stat-rank-down-3"
};

sc.STAT_CHANGE_SETTINGS["ATTACK-SACRIFICE"] = {
  change: sc.STAT_CHANGE_TYPE.STATS,
  type: sc.STAT_PARAM_TYPE.ATTACK,
  value: 1.15,
  icon: "stat-attack",
  grade: "stat-rank-1"
};

//Hexacast

sc.STAT_CHANGE_SETTINGS["ATTACK-MINUS-VANISHING"] = {
  change: sc.STAT_CHANGE_TYPE.STATS,
  type: sc.STAT_PARAM_TYPE.ATTACK,
  value: 0.50,
  negative: true,
  icon: "stat-attack",
  grade: "stat-rank-down-3"
};

sc.STAT_CHANGE_SETTINGS["DEFENSE-PLUS-STASIS"] = {
  change: sc.STAT_CHANGE_TYPE.STATS,
  type: sc.STAT_PARAM_TYPE.DEFENSE,
  value: 2.50,
  negative: false,
  icon: "stat-defense",
  grade: "stat-rank-up-1"
};

sc.STAT_PARAM_TYPE.TOXIC_HAZARD = {
  key: "TOXIC_HAZARD"
};

sc.STAT_CHANGE_SETTINGS["POISON_INFLICT-1"] = {
  change: sc.STAT_CHANGE_TYPE.MODIFIER,
  type: sc.STAT_PARAM_TYPE.TOXIC_HAZARD,
  value: 1.5,
  negative: false,
  icon: "stat-hack",
  grade: "stat-rank-1"
};

sc.STAT_CHANGE_SETTINGS["POISON_INFLICT-2"] = {
  change: sc.STAT_CHANGE_TYPE.MODIFIER,
  type: sc.STAT_PARAM_TYPE.TOXIC_HAZARD,
  value: 99,
  negative: false,
  icon: "stat-hack",
  grade: "stat-rank-3"
};

sc.STAT_CHANGE_SETTINGS["DEFENSE-MINUS-DECAY"] = {
  change: sc.STAT_CHANGE_TYPE.STATS,
  type: sc.STAT_PARAM_TYPE.DEFENSE,
  value: 0.50,
  negative: true,
  icon: "stat-defense",
  grade: "stat-rank-down-3"
};