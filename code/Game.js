function Game(){
  var _controller = new GameController();

  this.init = function(){
    _controller.setState(new GameState({
      "food" : 10,
      "safety": 10,
      "credits":0,
      "culture":10
    }));

    var emotion = (new EmotionState()).initStates();
  
    var actionTree = new ActionTree();
    actionTree.init();
    
    _controller.registerAgent(
      new Agent(
        "Red Team",
        "business-woman.png",
        actionTree,
        {
          "food": 0.2,         
          "safety": 0,
          "culture": 0.8
        },
        emotion,
        70,
        33,
        20
      )
    );
    
    _controller.registerAgent(
      new Agent(
        "Blue Team",
        "business-man.png",
        actionTree,
        {
          "food": 0,
          "safety": 1,
          "culture":0
        },
        emotion,
        70,
        33,
        100
      )
    );
    
    _controller.registerAgent(
      new Agent(
        "Green Team",
        "primitive-man.png",
        actionTree,
        {
          "food":0.7,
          "safety":0.3,
          "culture":0
        },
        emotion,
        70,
        33,
        50
      )
    );
   
    _controller.registerHeadOfState(
      new HumanAgent("King", "")
    );

    _controller.inform();
  }
}
