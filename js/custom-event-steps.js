ig.EVENT_STEP.SET_PARTY_MEMBER_LEVEL_VAR = ig.EventStepBase.extend({
  member: null,
  level: 0,
  exp: null,
  updateEquipment: false,
  _wm: new ig.Config({
    attributes: {
      member: {
        _type: "String",
        _info: "Party member to add",
        _select: sc.PARTY_OPTIONS
      },
      level: {
        _type: "NumberExpression",
        _info: "Level to set"
      },
      exp: {
        _type: "Integer",
        _info: "Exp to set"
      },
      updateEquipment: {
        _type: "Boolean",
        _info: "If true, also update equipment of party member"
      }
    }
  }),
  init: function (a) {
    this.member = a.member;
    this.level = a.level || 1;
    this.exp = a.exp || 0;
    this.updateEquipment = a.updateEquipment || false
  },
  start: function () {
    sc.party.getPartyMemberModel(this.member).setLevel(ig.Event.getExpressionValue(this.level), this.exp, this.updateEquipment, true)
  }
});