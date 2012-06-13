function GameState(values){
  // Core values
  var _values = values;
  
  this.updateValues = function(values){
    for(var key in values){
      if( key in _values ){
        _values[key] += values[key];
        _values[key] = (_values[key]>=0?_values[key]:0);
      }
    }
  }

  this.getValue = function(key){
    if(key in _values) return _values[key];
    else return 0;
  }

  this.getRawState = function(){ return _values; };
}
