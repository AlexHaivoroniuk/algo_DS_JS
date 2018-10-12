/*
BINARY SEARCH TREES
Abstract data type
A binary search tree is a tree with the additional constraints:
- each node has only two child nodes (node.left and node.right)
- all the values in the left subtree of a node are less than or equal to the value of the node
- all the values in the right subtree of a node are greater than the value of the node
*** Operations:
bsTree.insert(value)
=> bsTree (return for chaining purposes)
Insert value into correct position within tree
bsTree.contains(value)
=> true/false
Return true if value is in tree, false if not
bsTree.traverseDepthFirst_inOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first in-order (visit left branch, then current node, than right branch)
Note: In-Order traversal is most common type for binary trees. For binary search tree, this visits the nodes in ascending order (hence the name).
bsTree.traverseDepthFirst_preOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first pre-order (visits current node before its child nodes)
bsTree.traverseDepthFirst_postOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first post-order (visit the current node after its child nodes)
bsTree.isValid()
=> returns true if BST is a valid BST otherwise returns false. This method is useful for checking your other methods.
bsTree.removeNode(value)
=> node
Remove node from tree.
bsTree.checkIfFull()
=> true/false
A binary tree is full if every node has either zero or two children (no nodes have only one child)
bsTree.checkIfBalanced()
=> true/false
For this exercise, let's say that a tree is balanced if the minimum height and the maximum height differ by no more than 1. The height for a branch is the number of levels below the root.
*** Additional Exercises:
A binary search tree was created by iterating over an array and inserting each element into the tree. Given a binary search tree with no duplicates, how many different arrays would result in the creation of this tree.
*/


/*
//Constructor 
    //value
    //left
    //right
//Methods
    // insert(value) goal: find it's  proper place 
        if value < currentValue
            if (left) go Left
                this.left.insert(value)
            else insert
        else if value > currentValue
            if(right) go Right
                this.right.insert(value)
            else insert
//Contails
    contains(value) => true/false
        if (currentVal === value)
            return true;
        else if (currentVal > value)
            if (left) go Left
                this.left.contains(value)
            else insert
        else if (currentVal < value)
            if(right) go Right
                this.right.contains(value)
            else insert;
        else return false


====
bst = BST(11)
{ value: 11, left: null. right: null}
bst.insert(15)
{ value: 11, 
  left: null,
  right: {
      value: 15,
        left: null,
        right: null
    }
}
bst.insert(7)
{ value: 11, 
  left: {
      value: 7,
      left: null,
      right: null
  },
  right: {
      value: 15,
        left: null,
        right: null
    }
}
bst.insert(5)
{ value: 11, 
  left: {
      value: 7,
      left: {
          value: 5,
          left: null,
          right: null
      },
      right: null
  },
  right: {
      value: 15,
        left: null,
        right: null
    }
}
bst.insert(17)
{ value: 11, 
  left: {
      value: 7,
      left: {
          value: 5,
          left: null,
          right: null
      },
      right: null
  },
  right: {
      value: 15,
        left: null,
        right: {
            value: 17,
            left: null,
            right: null
        }
    }
}
*/

function BinarySearchTree (value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this._root = this._root || this.value;
}
  
BinarySearchTree.prototype.insert = function(value) {
    if (value < this.value) {
        if (this.left) this.left.insert(value)
        else this.left = new BinarySearchTree(value)
    } else if (value > this.value) {
        if (this.right) this.right.insert(value)
        else this.right = new BinarySearchTree(value)
    }
};
// Time complexity: O(log n)

BinarySearchTree.prototype.contains = function(value) {
    if (this.value === value) return true;
    else if (this.value > value) {
        if (this.left) return this.left.contains(value)
        else return false
        // !!this.left && this.left.contains(value)
    }
    else if (this.value < value) {
        if(this.right) return this.right.contains(value)
        else return false;
        // !!this.right && this.right.contains(value)
    }
    return false;
};
// Time complexity: O(log n)

/*
first go all the way to the left
then the parent
then the right
then the parent parent
==================
when !! this.left traverse(this.left)
this.val
when !! this.right traverse(this.right)
*/

BinarySearchTree.prototype.traverseDepthFirst_inOrder = function(fn) {
    if (!!this.left) this.left.traverseDepthFirst_inOrder(fn);
    fn(this);
    if (!!this.right) this.right.traverseDepthFirst_inOrder(fn);
    return;
};
// Time complexity: O(n)

/*
this.val
when !! this.left traverse(this.left)
when !! this.right traverse(this.right)
*/

BinarySearchTree.prototype.traverseDepthFirst_preOrder = function(fn) {
    fn(this);
    if (!!this.left) this.left.traverseDepthFirst_preOrder(fn);
    if (!!this.right) this.right.traverseDepthFirst_preOrder(fn);
    return;
};
// Time complexity:

/*
when !! this.left traverse(this.left)
when !! this.right traverse(this.right)
this.val
*/
BinarySearchTree.prototype.traverseDepthFirst_postOrder = function(fn) {
    if (!!this.left) this.left.traverseDepthFirst_postOrder(fn);
    if (!!this.right) this.right.traverseDepthFirst_postOrder(fn);
    fn(this);
    return;
};
// Time complexity:

/*
Delete min/max
    1. Go left until the left is null
        if (no left)
            delete that node by setting parent left to null
        if (left)
            traverse left


    deleteMin(parent)
        if(!this.left && !this.right)
            parent.left = null
        if(!this.left && this.right)
            parent.left = this.right
        //go left until left is null
        if (this.left) this.left.deleteMin()
    
*/

BinarySearchTree.prototype.deleteMin = function(parent) {
    if(!this.left && !this.right) {
        if (parent) {
            parent.left = null;
        } else { // if the max val is the last node
            this.value = null; //we want to add nodes later
        }
    } 
    if (!this.left && this.right) { 
        if (parent) {
            parent.left = this.right;
        } else { // max val is the root with the subtree
            this.value = this.right.value;
            this.right = this.right.right;
        }
    }
    if (this.left) this.left.deleteMin(this); 
};
// Time complexity:

BinarySearchTree.prototype.deleteMax = function(parent) {
    if(!this.right && !this.left) {
        if (parent) {
            parent.right = null;
        } else {
            this.value = null; //we want to add nodes later
        }
    } 
    if (!this.right && this.left) { 
        if (parent) {
            parent.right = this.left;
        } else {
            this.value = this.left.value;
            this.left = this.left.left;
        }
    }
    if (this.right) this.right.deleteMax(this); 
};
// Time complexity:

/*
::::PRDN(parent's relationship to-be-deleted node ) 

deleteNode(val)
    search for node/val
        check if current val equals val
            if so, delete(val, current)
            else search(val)
========================================
delete(val, parent)
    if it's a root
        account fo this
    else
        set PRDN relationship from parent (L, R)
****case 1*** //  is a leaf
  check if it's a leaf, if so
            delete if
                whitch pointer do we make null?
                    set the PRDN to null
                    parent['right'] = null
***case 2*** // has 1 node
    check if current node has L or R
        PRDN to this.left || this.right
        if right, then set PRDN to this.right
        parent['right'] = this.left || this.right;
        
*/
BinarySearchTree.prototype.deleteNode = function(val) {
    var self = this;


    function findMin(curr, parent) {
        if (curr.left) return findMin(curr.left, curr);
        else {
            parent.left = null;
            return curr;
        }; 
    }

    function del(val, curr, parent) {
        var prdn = null;
        if (curr.value === self._root) { // then its root
            console.log('its a root');
            curr = findMin(curr.right, curr);
        } else {
            if (val > parent.value) prdn = 'right';
            else prdn = 'left';
        }
        // Case 1
        if (!curr.left && !curr.right) { // then its a leaf
            parent[prdn] = null;
            prdn = null;
        }
        // Case 3
        else if (curr.left && curr.right) { // has both children (curr.left && curr.right) replace with successor
            //find the right min
            parent[prdn] = findMin(curr.right, curr); 
        }
        // Case 2
        else if (curr.left || curr.right) { // then it has one child
            parent[prdn] = curr.left || curr.right;
            prdn = curr.left ? 'left' : 'right';
        }
  
    }

    function search(val, curr, parent) {
        if (val === curr.value) {
            del(val, curr, parent);
        }
        else if (val > curr.value) search(val, curr.right, curr);
        else search(val, curr.left, curr);
    }
    
    search(val, self)
};
// Time complexity:

BinarySearchTree.prototype.checkIfFull = function() {
// implement me...
};
// Time complexity:

BinarySearchTree.prototype.checkIfBalanced = function() {
// implement me...
};
// Time complexity:

var bst = new BinarySearchTree(11);
bst.insert(7);
bst.insert(5);
bst.insert(3);
bst.insert(6);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(15);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
// console.log(bst);
// console.log(bst.contains(12))


// bst.deleteMin()
// bst.deleteMax()
bst.deleteNode(7);
bst.traverseDepthFirst_inOrder((v) => {
    console.log(v.value);
})

// console.log('----------------------------------------------------------------------');
// bst.traverseDepthFirst_preOrder((v) => {
//     console.log(v.value);
// })
// console.log('----------------------------------------------------------------------');
// bst.traverseDepthFirst_postOrder((v) => {
//     console.log(v.value);
// })
