function Agent(name, img, action_tree, preferences, emotion_state, energy, power){

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

  var _power = power;
  this.getPower = function(){ return _power; };
  this.setPower = function(power){ _power = power; };
  this.increasePower = function(delta){ _power += delta; };
  this.decreasePower = function(delta){ _power -= delta; };

  var _preferences = preferences;
  this.getPreferences = function(){ return _preferences; };

  // Signed integer
  var energy = energy;

  // Emotional state
  var _emotion = emotion_state;

  this.getEnergy = function(){ return energy; }
  this.getEmotion = function(){ return _emotion; };
  this.setEmotion = function(emotion){ _emotion = emotion; };

  this.updateEnergy = function(delta){
    energy += delta;
    energy = (energy<100?energy:100);
    energy = (energy>0?energy:0);
  }

  this.updateEmotion = function(delta){
    this.updateEnergy(delta);
    this.setEmotion(
      this.getEmotion().transition(this.getEnergy())
    );
  }

  var _expectedProgress = 0;

  this.getDesire = function(state){
    var action = this.getActionTree().findHighestPossibleNode(
      this.getPreferences(), 
      state
    );
    if(action)
      _expectedProgress = action.getWeightedEffectScore(this.getPreferences());
    return action;
  }

  this.getSupport = function(){
    return this.getPower()*(this.getEnergy()/100);
  }

  this.evaluate = function(action){
    var delta = action.getWeightedEffectScore(this.getPreferences());
    delta -= 0.5*_expectedProgress;
    this.updateEmotion(delta);
    return delta;
  }
}
