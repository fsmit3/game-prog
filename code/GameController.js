function GameController(){
  var _agents = new Array();

  // Head of State
  var _hos;

  // World
  var _world = new GameState({
    "food": 5,
    "safety": 5
  })
  this.getWorld = function(){ return _world; };

  this.registerAgent = function(agent){
    _agents[_agents.length] = agent;
    agent.setGameController(this);
  };

  this.registerHeadOfState = function(agent){
    _hos = agent;
    agent.setGameController(this);
  }
  this.getHOS = function(){ return _hos; };

  this.inform = function(){
    var desires = new Array();
    for(var i = 0; i < _agents.length; i++){
      desires[desires.length] = {
        "agent": _agents[i],
        "action": _agents[i].getDesire()
      };
    }
    var action = this.getHOS().informDesires(desires);
  }

  this.perform = function(action){
    this.getWorld().updateValues(action.getEffects());
    for(var i = 0; i < _agents.length; i++){
      _agents[i].evaluate(action);
    }
    this.inform();
  }

}
