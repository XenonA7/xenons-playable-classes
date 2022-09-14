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