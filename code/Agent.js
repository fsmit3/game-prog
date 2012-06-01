function Agent(name, img, action_tree, preferences, emotion_state){

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

  var _preferences = preferences;
  this.getPreferences = function(){ return _preferences; };

  // Signed integer
  var energy = 0;

  // Emotional state
  var state = emotion_state;

  this.getEnergy = function(){ return energy; }
  this.getEmotion = function(){ return state; };

  this.updateEnergy = function(delta){
    energy += delta;
  }

  this.updateEmotion = function(delta){
    this.updateEnergy(delta);
    return this.getEmotion().transition(this.getEnergy());
  }

  this.getDesire = function(state){
    return this.getActionTree().findHighestPossibleNode(
      this.getPreferences(), 
      state
    );
  }

  this.evaluate = function(action){
    this.updateEmotion(
      action.getWeightedEffectScore(this.getPreferences())
    );
  }
}
