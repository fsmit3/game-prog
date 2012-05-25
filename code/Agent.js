function Agent(name, img, action_tree){

  var _name = name;
  var _img = img;
  this.getName = function(){ return _name; };
  this.getImg = function(){ return _img; };

  var _action_tree = action_tree;
  this.setActionTree = function(tree){ _action_tree = tree; };
  this.getActionTree = function(){ return _action_tree; };

  var _game_controller;
  this.getGameController = function(){ return _game_controller; };
  this.setGameController = function(controller){
    _game_controller = controller;
  }

  // Signed integer
  var energy = 0;

  // Emotional state
  var state;

  this.getEnergy = function(){ return energy; }
  this.getState = function(){ return state; };

  this.updateEnergy = function(delta){
    energy += delta;
  }

  this.updateEmotion = function(delta){
    this.updateEnergy(delta);
    return this.getState().transition(this.getEnergy());
  }

  this.getDesire = function(){
    return this.getActionTree().getRoot();
  }

  this.evaluate = function(action){
    var effects = action.getEffects();
    var change = 0;
    for( var key in effects ){
      change += effects;
    }
    this.updateEmotion(change);
  }
  
  this.approveDesire = function(actions){
    return actions[0];
  }
}
