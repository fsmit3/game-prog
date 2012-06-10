function GameController(){
  var _agents = new Array();

  // Head of State
  var _hos;

  // Game State
  var _state;
  this.setState = function(state){ _state = state; };
  this.getState = function(){ return _state; };

  this.registerAgent = function(agent){
    _agents[_agents.length] = agent;
    agent.setGameController(this);
  };
  this.getAgents = function(){ return _agents; }

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
        "action": _agents[i].getDesire(this.getState())
      };
    }
    var action = this.getHOS().informDesires(desires);
  }

  this.perform = function(action){
    this.getState().updateValues(action.getEffects());
    for(var i = 0; i < _agents.length; i++){
      _agents[i].evaluate(action);
    }
    this.inform();
  }

  this.getSupport = function(){
    var support = 0;
    for(var i = 0; i < _agents.length; i++){
      support += _agents[i].getSupport();
    }
    return support;
  }

}
