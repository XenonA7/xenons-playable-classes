sc.COMBAT_CONDITION.TARGET_HAS_BLOCKED_DAMAGE = ig.Class.extend({
  _wm: new ig.Config({
    attributes: {}
  }),
  init: function () {},
  check: function (a) {
    return (a.getTarget()).combo.blockedDamage > 0
  }
});

sc.COMBAT_CONDITION.TARGET_HAS_BLOCKED_HITS = ig.Class.extend({
  _wm: new ig.Config({
    attributes: {}
  }),
  init: function () {},
  check: function (a) {
    return (a.getTarget()).combo.guardedHits > 0
  }
});