function HumanAgent(){
  var _self = inherit(this, new Agent());
  var _parent = _self._parent;
  
  this.informDesire = function(actions){
    //Human interaction
    requestApproval(this.getGameController(), actions);
  }
}
