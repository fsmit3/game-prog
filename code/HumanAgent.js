function HumanAgent(name, img){
  var _self = inherit(this, new Agent(name, img));
  var _parent = _self._parent;
  
  this.informDesires = function(actions){
    //Human interaction
    requestApproval(this.getGameController(), actions);
  }
}
