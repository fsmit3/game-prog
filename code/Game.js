function Game(){
  var _controller = new GameController();

  this.init = function(){
    _controller.setState(new GameState({
      "food" : 0,
      "safety": 0
    }));

    var emotion = (new EmotionState()).initStates();
  
    var actionTree = new ActionTree();
    actionTree.init();
    
    var red_team = new Agent("Red Team", "", actionTree, emotion);
    _controller.registerAgent(red_team);
    var blue_team = new Agent("Blue Team", "", actionTree, emotion);
    _controller.registerAgent(blue_team);
   
    var king = new HumanAgent("King", "", actionTree, emotion);
    _controller.registerHeadOfState(king);

    _controller.inform();
  }
}
