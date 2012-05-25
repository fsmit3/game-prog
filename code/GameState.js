function GameState(values){
  // Core values
  var _values = values;
  
  this.updateValues = function(values){
    for(var key in values){
      if( key in _values ){
        _values[key] += values[key];
      }
    }
  }
}
