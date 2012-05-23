function ActionTree(){
  var _root;

  this.getRoot = function(){ return _root; };

  this.init = function(){
    _root = new ActionNode("Root",100);
    var node_1 = new ActionNode("Food", 30, _root);
    var node_11 = new ActionNode("Create more farm land", 0, _root);
    var node_2 = new ActionNode("Safety", 20);
    var node_21 = new ActionNode("Create more guard towers", 0, node2);
  }

  this.findHighestPossibleNode = function(value){
    
  }

  
  /**
   * findDepthFirst
   * f_test - function handle that returns either true or false
   *          to indicate whether the newly found node should replace
   *          the previously found node. 
   *          Arguments passed:
   *            * current - current node (ActionNode or null)
   *            * new - new node (ActionNode)
   * Returns the best found node according to f_test or null
   **/
  this.findDepthFirst = function(f_test){
    var result = new Queue();
    var queue = new Queue();
    queue.push(_root);

    // Current
    var currentNode = null
    var newNode;
    
    while(!queue.isEmpty()){
      newNode = queue.pop();
      if(f_test(currentNode, newNode)){
        currentNode = newNode;
      }else{
        queue.pushAll(newNode.getChilds());
      }
    }
    return currentNode;
  }

}
