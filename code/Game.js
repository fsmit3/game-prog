function Game(){
  var _controller = new GameController();

  this.init = function(){
    _controller.setState(new GameState({
      "food" : 0,
      "safety": 0
    }));
    
    var actionTree = new ActionTree();
    actionTree.init();
    
    var red_team = new Agent("Red Team", "business-man.png", actionTree);
    _controller.registerAgent(red_team);
    var blue_team = new Agent("Blue Team", "business-woman.png", actionTree);
    _controller.registerAgent(blue_team);
   
    var king = new HumanAgent("King", "", actionTree);
    _controller.registerHeadOfState(king);

    _controller.inform();
  }
}
