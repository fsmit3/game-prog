function ActionNode(description, thresholds, effects, parentNode){

  var _description = description;
  var _parent = null;
  var _childs = [];

  var _effects = effects;
  var _thresholds = thresholds;
  
  var _score = 0;
  for(var key in effects){ _score += effects[key]; }

  this.getDescription = function(){ return _description; };
  this.setDescription = function(desc){ _description = desc; };

  this.getScore = function(){ return _score; };
  this.setScore = function(score){ _score = score; };

  this.getParent = function(){ return _parent; };
  this.setParent = function(parentNode){ _parent = parentNode; };

  this.getChilds = function(){ return _childs; };
  this.setChilds = function(childs){ _childs = childs; };
  
  this.getThresholds = function(){ return _thresholds; };
  this.setThresholds = function(thresholds){ _thresholds = thresholds; };

  this.getEffects = function(){ return _effects; };
  this.setEffects = function(effects){ _effects = effects; };

  this.addChildNode = function(node){
    _childs[_childs.length] = node;
    node.setParent(this);
  }

  this.getWeightedEffectScore = function(weights){
    var effects = this.getEffects();
    var score = 0;
    for(var topic in effects){
      if( topic in weights){
        score += weights[topic]*effects[topic];
      }else{
        score += 0;
      }
    }
    return score;
  }

  this.performable = function(state){
    var thres = this.getThresholds();
    for(var cond in thres){
      if(state.getValue(cond) < thres[cond]){
        return false;
      }
    }
    return true;
  }

  if(parentNode != undefined){ parentNode.addChildNode(this); }
}
