function ActionTree(){
  var _root;

  this.getRoot = function(){ return _root; };

  this.init = function(){
    _root = new ActionNode("Root",{"food":1000, "safety":1000, "culture":1000}, {"food": 2, "safety": 3, "culture":5});
    // depth = 1
    var node_11 = new ActionNode('Irrigate more farm land', {"food":100, "safety":20, "culture":10}, {'food': 30, 'safety':-5, 'culture': -5}, _root);
    var node_12 = new ActionNode('Create more laws', {"food":1000, "safety":1000, "culture":1000}, {'food':0, 'safety':20, 'culture':0} , _root);
    var node_13 = new ActionNode('Build a concert hall', {"food":1000, "safety":1000, "culture":1000},  {'food':-12, 'safety':-15, 'culture':20} , _root);
    
    var node_4 = new ActionNode('Build more farms', {'food':1000, 'safety':1000, 'culture':1000}, {'food': 15, 'safety':-10, 'culture': -10}, _root);
    var node_5 = new ActionNode('Create more farm tools', {'food':1000, 'safety':1000, 'culture':1000}, {'food': 10, 'safety':-5, 'culture': -5}, _root);
    var node_6 = new ActionNode('Build more granaries', {'food':1000, 'safety':1000, 'culture':1000}, {'food': 20, 'safety':-5, 'culture': -10}, _root);
    var node_7 = new ActionNode('Build more markets', {'food':1000, 'safety':1000, 'culture':1000}, {'food': 15, 'safety':-10, 'culture': -10}, _root);
    var node_8 = new ActionNode('Subsidize more farmers', {'food':1000, 'safety':1000, 'culture':1000}, {'food': 5, 'safety':0, 'culture':0}, _root);
    var node_9 = new ActionNode('Improve farming technologies', {'food':1000, 'safety':1000, 'culture':1000}, {'food': 7, 'safety':0, 'culture':0}, _root);
    var node_10 = new ActionNode('Train police officers to be farmers', {'food':1000, 'safety':1000, 'culture':1000},  {'food': 10, 'safety':-20, 'culture': -5}, _root);
    var node_14 = new ActionNode('Transform iron tools to farm tools', {'food':1000, 'safety':1000, 'culture':1000}, {'food': 13, 'safety':0, 'culture':0}, _root);
    
    var node_15 = new ActionNode('Build more walls', {'food':1000, 'safety':1000, 'culture':1000}, {'food': -5, 'safety':14, 'culture': -10}, _root);
    var node_16 = new ActionNode('Build more police schools', {'food':1000, 'safety':1000, 'culture':1000}, {'food':-6, 'safety':5, 'culture':-10}, _root);
    var node_17 = new ActionNode('Hire more police trainers', {'food':1000, 'safety':1000, 'culture':1000}, {'food':-3, 'safety':5, 'culture':0}, _root);
    var node_18 = new ActionNode('Create more weapons', {'food':1000, 'safety':1000, 'culture':1000}, {'food':0, 'safety':15, 'culture':0}, _root);
    var node_19 = new ActionNode('Create more barracks', {'food':1000, 'safety':1000, 'culture':1000}, {'food':-7, 'safety':15, 'culture': -10}, _root);
    var node_20= new ActionNode('Subsidize more police officers', {'food':1000, 'safety':1000, 'culture':1000}, {'food': -2, 'safety':20, 'culture': -5}, _root);
    var node_21 = new ActionNode('Train farmers to be police officers', {'food':1000, 'safety':1000, 'culture':1000},  {'food': 30, 'safety':-5, 'culture': -5}, _root);
    var node_22 = new ActionNode('Transform iron tools to weapons', {'food':1000, 'safety':1000, 'culture':1000}, {'food':-2, 'safety':5, 'culture':0}, _root);
    
    var node_23 = new ActionNode('Build more sculptures', {'food':1000, 'safety':1000, 'culture':1000}, {'food':-2, 'safety':0, 'culture':15}, _root);
    var node_24 = new ActionNode('Build more art schools', {'food':1000, 'safety':1000, 'culture':1000}, {'food':-10, 'safety':-5, 'culture':20}, _root);
    var node_25 = new ActionNode('Hire more art teachers', {'food':1000, 'safety':1000, 'culture':1000}, {'food':-10, 'safety':-10, 'culture':5}, _root);
    var node_26 = new ActionNode('Build more art galleries', {'food':1000, 'safety':1000, 'culture':1000}, {'food':-10, 'safety':-10, 'culture':10}, _root);
    var node_27 = new ActionNode('Build more museums', {'food':1000, 'safety':1000, 'culture':1000}, {'food':-10, 'safety':-10, 'culture':10}, _root);
    var node_28 = new ActionNode('Subsides more artists', {'food':1000, 'safety':1000, 'culture':1000}, {'food':-2, 'safety':-2, 'culture':5}, _root);
    var node_29 = new ActionNode('Lower prices of canvas', {'food':1000, 'safety':1000, 'culture':1000}, {'food':0, 'safety':0, 'culture':5}, _root);
    var node_30 = new ActionNode('Spend more on architecture', {'food':1000, 'safety':1000, 'culture':1000}, {'food':-5, 'safety':-5, 'culture':10}, _root);
    var node_31 = new ActionNode('Transform iron tools to music instruments', {'food':1000, 'safety':1000, 'culture':1000}, {'food':-2, 'safety':-2, 'culture':5}, _root);
    

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
