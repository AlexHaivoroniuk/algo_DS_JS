/*
TREES
Abstract data type
General Tree:
A tree has a root node.
The root node has 0 or more children.
Each child node has 0 or more children.
(each node in the tree can be seen as a subtree)
Constraints:
A child has only one parent and the root node has no parent.
Note: A tree is a special type of graph. A tree is a graph without cycles.
*** Operations:
tree.addChild(value)
=> child node (new tree)
add child to tree/subtree and return child node (which should be a tree instance)
tree.contains(value)
=> true/false
Return true if value is in tree, false if not
tree.traverseDepthFirst(callback)
=> undefined
Invoke the callback for every node in a depth-first order
tree.traverseBreadthFirst(callback)
=> undefined
Invoke the callback for every node in a breadth-first order
*** Additional Exercises:
Given treeA and treeB, check if treeB is a subtree of treeA (meaning that there exists a node n in treeA such that the subtree of n is identical to treeB).
Given a dictionary, create a prefix tree (commonly known as a trie)
https://en.wikipedia.org/wiki/Trie
*/

/*
//Node constructor
  //this.value
  //this.children = [];
//Costructor func, takes value
    new Node(value)
    set root, node
*/

// N-ary Tree
function Tree (value) {
  this.value = value;
  this.children = [];
}
  
Tree.prototype.addChild = function(value) {
  var child = new Tree(value);
  this.children.push(child)

  return child;
};
// Time complexity:


Tree.prototype.contains = function(value) {
  var contains = false;
  if (this.value === value) return true;
  else if (this.children.length > 0) {
    this.children.forEach(el => {
      contains = el.contains(value) ? true : contains;
    });
  }
  return contains;
};
// Time complexity:


Tree.prototype.traverseDepthFirst = function(fn) {
  this.children.forEach((child) => {
    child.traverseDepthFirst(fn)
  });
  fn(this);
};
// Time complexity:


Tree.prototype.traverseBreadthFirst = function(fn) {
  var queue = [this];
  while (queue.length) {
    var node = queue.shift();
    fn(node.value);
    node.children.forEach(child => {
      queue.push(child);  
    });
  }
};
// Time complexity:

var tree = new Tree(0);
var branch1 = tree.addChild(1);
var branch2 = tree.addChild(2);
var branch3 = tree.addChild(3);

branch1.addChild(5)
branch2.addChild(6)
branch3.addChild(7).addChild(8)

console.log(tree.contains(8))
tree.traverseBreadthFirst(val => console.log(val));