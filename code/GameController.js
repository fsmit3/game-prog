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

    var maxLoser;
    var maxLoss = 0;
    var maxWinner;
    var maxWin = 0;
    var delta = 0;
    for(var i = 0; i < _agents.length; i++){
      delta = _agents[i].evaluate(action);
      if(delta > 0 && delta > maxWin){
        maxWinner = _agents[i];
        maxWin = delta;
      } else if(delta < 0 && delta < maxLoss){
        maxLoser = _agents[i];
        maxLoss = delta;
      }
    }
    if(maxWin > 0 && maxLoss < 0){
      this.shiftPower(maxWinner, maxWin, maxLoser, maxLoss);
    }
    this.inform();
  }

  this.shiftPower = function(winner, deltaW, loser, deltaL){
    var p = (100 - Math.abs(winner.getPower() - loser.getPower()))/100;
    var r = Math.random();
    var f = 0.1;
    var delta = p*f*r*Math.abs(deltaL - deltaW);
    winner.increasePower(delta);
    loser.decreasePower(delta);
  }

  this.getSupport = function(){
    var support = 0;
    for(var i = 0; i < _agents.length; i++){
      support += _agents[i].getSupport();
    }
    return support;
  }

}
