function GameController(){
  var _agents = new Array();

  // Head of State
  var _hos;

  this.registerAgent = function(agent){
    _agents[_agents.length] = agent;
  };

  this.registerHeadOfState = function(agent){
    _hos = agent;
  }
  this.getHOS = function(){ return _hos; };

  this.round = function(){
    var desires = new Array();
    for(var i = 0; i < _agents.length; i++){
      desires[desires.length] = _agents[i].getDesire();
    }
    var action = this.getHOS().approveDesire(desires);
    this.execute(action);
    for(var i = 0; i < _agents.length; i++){
      _agents[i].evaluate(action);
    }
    this.round();
  }

  this.execute = function(action){

  }

}
