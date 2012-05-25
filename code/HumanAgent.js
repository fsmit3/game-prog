function HumanAgent(name, img, action_tree){
  var _self = inherit(this, new Agent(name, img, action_tree));
  var _parent = _self._parent;
  
  this.informDesire = function(actions){
    //Human interaction
    requestApproval(this.getGameController(), actions);
  }
}
