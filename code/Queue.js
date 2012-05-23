function Queue(){
  var _queue = null;
  
  this.isEmpty = function(){ return (_queue == null); };

  this.push = function(elem){
    _queue = {
      "next": _queue,
      "elem": elem
    };
  }

  this.pushAll = function(list){
    for(var i = 0; i < list.length; i++){
      this.push(list[i]);
    }
  }

  this.pop = function(){
    if( _queue == null) return null;
    var node = _queue.elem;
    _queue = _queue.next;
    return node;
  }

  this.popAll = function(){
    var list = [];
    var node;
    do {
      node = this.pop();
      if( node != null ) list[list.length] = node;
    } while ( node != null );
    return list;
  }
}
