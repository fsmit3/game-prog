function EmotionState(){
  // Hash-table of references to other states
  // Keys are state thresholds: minimal energy required to
  // make the transition to that state.
  // This threshold is considered to be unique.
  var states = {}

  this.addState = function(stateRef, stateThreshold){
    this.removeState(stateRef);
    states[stateThreshold] = stateRef;
  }

  this.getStateStruct = function(){ return states; }
  
  this.transition = function(energy){
    var states = this.getStateStruct();
    var key;
    for( key in states ){
      if( key >= 0 && energy > key ){
        // Make transition
        return states[key];
      }else if ( key <  0 && energy < key ){
        // Make transition
        return states[key];
      }
    }
  }
 
  this.removeState = function(stateRef){
    var key;
    var states = this.getStateStruct();
    for( key in states){
      if( states[key] == stateRef ){
        delete states[key];
      }
    }
  }
  
}
