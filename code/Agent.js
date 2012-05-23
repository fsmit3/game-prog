function Agent(){

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

  }

  this.evaluate = function(action){

  }
  
  this.approveDesire = function(actions){
    return actions[0];
  }
}
