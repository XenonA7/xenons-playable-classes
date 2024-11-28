/*
    Author: Azure Lazuline
    Created: 11/06/2024

    Description: Clears all wave recall proxies when combat starts. This prevents the use of Wave
    Recall to escape scripted fight sequences and exit the map, breaking the game.
*/

sc.GameModel.inject({
  startCombat() {
    var b = ig.game.playerEntity;
    sc.CombatProxyTools.clearEntityProxy(b, "recallGroupA", false, 0, null);
    sc.CombatProxyTools.clearEntityProxy(b, "recallGroupB", false, 0, null);
    this.parent();
  },
});