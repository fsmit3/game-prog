function HumanAgent(name, img){
  var _self = inherit(this, new Agent(name, img, undefined,undefined, 0, 0));
  var _parent = _self._parent;
  
  this.informDesires = function(actions){
    //Human interaction
    requestApproval(this.getGameController(), actions);
  }

  this.getDesire = function(state){
    return new ActionNode("Pay your self a lot of money", {}, {"credits":10});
  }
}
