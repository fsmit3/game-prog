function HumanAgent(name, img, action_tree, emotion_state){
  var _self = inherit(this, new Agent(name, img, action_tree, emotion_state));
  var _parent = _self._parent;
  
  this.informDesires = function(actions){
    //Human interaction
    requestApproval(this.getGameController(), actions);
  }
}
