function EmotionState(){
  // Hash-table of references to other states
  // Keys are state thresholds: minimal energy required to
  // make the transition to that state.
  // This threshold is considered to be unique.
  var _states = {}
  var _stateKeys = [];

  this.addState = function(stateRef, stateThreshold){
    this.removeState(stateRef);
    _states[stateThreshold] = stateRef;
    this.addStateKey(stateThreshold);
  }

  this.addStateKey = function(stateKey){
    _stateKeys[_stateKeys.length] = stateKey;
  }

  this.getStateStruct = function(){ return _states; }
  
  this.transition = function(energy){
    var states = this.getStateStruct();
    var keys = _stateKeys.sort(function(a, b){ return Math.abs(b) - Math.abs(a); });
    var key;
    for( var i = 0; i < keys.length; i++){
      key = keys[i];
      if( parseInt(key) >= 0 && energy >= parseInt(key) ){
        // Make transition
        return states[key];
      }else if ( parseInt(key) <  0 && energy <= parseInt(key) ){
        // Make transition
        return states[key];
      }
    }
    return this;
  }
 
  this.removeState = function(stateRef){
    var key;
    var states = this.getStateStruct();
    for( key in states){
      if( states[key] == stateRef ){
        delete states[key];
        this.removeStateKey(key);
      }
    }
  }

  this.removeStateKey = function(key){
    stateKeys = [];
    for(var i = 0; i < _stateKeys; i++){
      if( _stateKeys[i] != key ){
        stateKeys[i] = _stateKeys[i];
      }
    }
    _stateKeys = stateKeys;
  }

  this.initStates = function(){
    var state0 = new EmotionState();
    var state1 = new EmotionState();
    var state2 = new EmotionState();
    var state3 = new EmotionState();
    
    state0.addState(state3, 40);
    state0.addState(state2, 20);
    state0.addState(state1, 00);
    state0.addState(state0, -20);

    state1.addState(state3, 40);
    state1.addState(state2, 20);
    state1.addState(state1, 0);
    state1.addState(state0, -20);

    state2.addState(state3, 40);
    state2.addState(state2, 20);
    state2.addState(state1, 0);
    state2.addState(state0, -20);
    
    state3.addState(state3, 40);
    state3.addState(state2, 20);
    state3.addState(state1, 0);
    state3.addState(state0, -20);

    return state0;
  }

  this.testTransitions = function(){
    var state = this.initStates();

    for( var t = -20; t < 50; t += 10){
      state = state.transition(t);
      if( t >= 40 && state != state3 ) return 1;
      else if( t >= 20 && t < 40 && state != state2 ) return 1;
      else if( t >= 0 && t < 20 && state != state1 ) return 1;
      else if( t < 0 && state != state0 ) return 1;
    }
    return 0;
  }
}
