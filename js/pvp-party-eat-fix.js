sc.PartyMemberModel.inject({
  canEatSandwich: function () {
      return sc.pvp.isActive() || (sc.arena.active && sc.arena.hasChallenge("NO_ITEMS")) ? false : this.hasSandwich() && !this.healing.cooldown
    }
});