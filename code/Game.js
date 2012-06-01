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
    
    _controller.registerAgent(
      new Agent(
        "Red Team",         // Name
        "",                 // Image
        actionTree,         // ActionTree
        {                   // Preferences
          "food": 1,         
          "safety": 0
        },
        emotion             // First emotional state
      )
    );
    
    _controller.registerAgent(
      new Agent(
        "Blue Team",        // Name
        "",                 // Image
        actionTree,         // ActionTree
        {                   // Preferences
          "food": 0,
          "safety": 1
        },
        emotion             // First emotional state
      )
    );
   
    _controller.registerHeadOfState(
      new HumanAgent("King", "")
    );

    _controller.inform();
  }
}
