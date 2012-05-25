function ActionNode(description, effects, parentNode){

  var _description = "";
  var _parent = null;
  var _childs = [];

  var _effects = effects;

  this.getDescription = function(){ return _description; };
  this.setDescription = function(desc){ _description = desc; };

  this.getScore = function(){ return _score; };
  this.setScore = function(score){ _score = score; };

  this.getParent = function(){ return _parent; };
  this.setParent = function(parentNode){ _parent = parentNode; };

  this.getChilds = function(){ return _childs; };
  this.setChilds = function(childs){ _childs = childs; };

  this.getEffects = function(){ return _effects; };
  this.setEffects = function(effects){ _effects = effects; };

  this.addChildNode = function(node)
    _childs[_childs.length] = node;
    node.setParent(this);
  }

  if(parentNode != undefined){ parentNode.addChildNode(this); }
}
