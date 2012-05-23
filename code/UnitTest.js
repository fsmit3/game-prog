function UnitTest(){
  var _units = {};

  this.addTestUnit = function(key, func){
    if( typeof(func) == "function" ){
      _units[key] = {
        "func" : func,
        "returnCode" : 0
      }
    }
  }

  this.test = function(){
    var success = 0;
    var error = 0;
    for( var key in _units){
      _units[key].returnCode = _units[key].func();
      if( _units[key].returnCode == 0 ) success++;
      else error++;
    }
    alert("Success: "+ success + "\nError: "+ error);
  }
}
