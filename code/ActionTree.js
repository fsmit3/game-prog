function ActionTree(){
  var _root;

  this.getRoot = function(){ return _root; };

  this.init = function(){
    _root = new ActionNode("Root",{"food":1000, "safety":1000}, {"food": 2, "safety": 3});
    // depth = 1
    var node_11 = new ActionNode("More food", {"food":10}, {"food": 5, "safety": -1}, _root);
    var node_12 = new ActionNode("More police", {"safety":6}, {"food": -3, "safety": 4}, _root);
    
    // depth = 2
    var node_21 = new ActionNode("More farms", {"food": 5}, {"food": 5, "safety": -1}, node_11);
    var node_22 = new ActionNode("More police stations", {"safety": 4}, {"food": -1, "safety": 2}, node_12);
    var node_23 = new ActionNode("Train police", {"safety":2}, {"food": -2, "safety": 2}, node_12);
    
    // depth = 3
    var node_31 = new ActionNode("Clear lands", {}, {"food": 2, "safety": 0}, node_21);
    var node_32 = new ActionNode("Build farms", {}, {"food": 3, "safety": -1}, node_21);
    var node_33 = new ActionNode("Build police schools", {}, {"food": -1, "safety": 1}, node_23);
    var node_34 = new ActionNode("Hire police teachers", {}, {"food": -1, "safety": 1}, node_23);

  }

  this.findHighestPossibleNode = function(prefs, state){
    return this.findDepthFirst(
      function(curNode, newNode){
        if(newNode.performable(state)){
          return (
            curNode == null ||
            (
              newNode.getWeightedEffectScore(prefs) >
              curNode.getWeightedEffectScore(prefs)
            )
          );
        }else{
          return false;
        }
      }
    );
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
