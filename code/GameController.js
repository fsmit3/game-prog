function GameController(){
  var _agents = new Array();

  // Head of State
  var _hos;

  // World
  var world = {
    "food": 5,
    "safety": 5
  }

  this.registerAgent = function(agent){
    _agents[_agents.length] = agent;
  };

  this.registerHeadOfState = function(agent){
    _hos = agent;
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
    this.execute(action);
    for(var i = 0; i < _agents.length; i++){
      _agents[i].evaluate(action);
    }
    this.round();
  }

  this.execute = function(action){
  }

}
