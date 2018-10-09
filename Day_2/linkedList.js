
/*
LINKED LIST
Comprised of nodes that represent a sequence.
Each node is composed of data and a reference/link to the next node.
*** Operations:
** Part 1
myList.forEach(callbackFn)
invoke callback function with the value of each node
myList.print()
=> string with all values in list (ex: '0, 1, 2, 3')
myList.insertAfter(refNode, value)
=> new node
insert new node associated with value passed in after refNode
myList.removeAfter(refNode)
=> removed node
remove node after the refNode
myList.insertHead(value)
=> new head
insert new head node at the beginning of the list with the value passed in
myList.removeHead()
=> removed head node
remove the head node of the linked list
myList.findNode(value)
=> first node that has a value matching what was passed in
* Optimization:
Say we have a linked list that has 100 items and we want to add an item to the very end. How would you do that with your current implementation? How can you modify the data structure to add an item to the end in constant time?
myList.appendToTail(value)
=> new tail node
add a new tail node at the end of the list with the associated value passed in
myList.removeTail()
=> removed tail node
remove the tail node from the list
** Part 2
Now let's think about creating insertBefore and removeBefore methods for the nodes in our list. Can you think of an efficient way to do so?
Think about time complexity. What would it be for your current implementation of a linked list?
How can we modify our data structures (Node and Linked List classes) so that we can make these O(1) operations?
Once you've come up with a plan, implement the following methods.
myList.insertBefore(refNode, value)
=> new node inserted
insert new node with associated value before refNode
myList.removeBefore(refNode)
=> removed node
remove node before the refNode passed in
*** Additional Exercises:
Implement a circularly linked list:
https://en.wikipedia.org/wiki/Linked_list#Circularly_linked_list
Reimplement stack and queue data structures using linked lists.
 */

 /*
 PSEUDOCODING
 //Node cobstructor
  //this.value
  //this.next = null
 //costructor func, takes value
    new Node(value)
    set head, node
    set tail, node
//Add to tail(value)
  createNode from Value
  set tail's next to node 
  update the LL tail to the new node
//Remove node(node)
  set parent to head
  while parent's next is not null or node
    parent is parent.next
    when found, set parent.next to child's/node's next
 */


// PART 1

function Node(value) {
    this.next = null;
    this.value = value;
}
  
function LinkedList(headValue) {
  if (headValue === undefined) console.log('Must provide value for first node');
  this.head = new Node(headValue);
  this.tail = this.head;
}

LinkedList.prototype.forEach = function(callback) {
  var parent = this.head;
  while (parent.next !== null) {
    callback(parent.value);
    parent = parent.next;
  }
};
// Time complexity: 0(n)

LinkedList.prototype.print = function() {
  var parent = this.head;
  var outStrArr = [];
  while (true) {
    if (parent.next === null) break;
    outStrArr.push(parent.value);
    parent = parent.next;
  }
  return outStrArr.join(',');
};
// Time complexity: O(n)

LinkedList.prototype.insertAfter = function(refNode, value) {
  var nodeToInsert = new Node(value);
  if (refNode.next === null) {
    refNode.next = nodeToInsert;
    this.tail = nodeToInsert;
  } else {
    nodeToInsert.next = refNode.next;
    refNode.next = nodeToInsert;
  }
};
// Time complexity: O(1)

LinkedList.prototype.removeAfter = function(refNode) {
  if (refNode.next === null) {
    console.log('Nothing to delete. This node is the end of linked list');
  } else {
    var parent = this.head;
    while (parent !== null) {
      if (parent === refNode) parent.next = refNode.next.next;
      parent = parent.next;
    }
  }
};
// Time complexity: O(n)

LinkedList.prototype.insertHead = function(value) {
  var newHead = new Node(value);
  console.log(this.head);
  newHead.next = this.head;
  this.head = newHead;
};
// Time complexity: O(1)

LinkedList.prototype.removeHead = function() {
  this.head = this.head.next;
}
// Time complexity: O(1)

LinkedList.prototype.findNode = function(value) {
  var parent = this.head;
  while (parent !== null) {
    if (parent.value === value) return parent;
    parent = parent.next;
    if (parent === null) return 'No node with such value';
  }
};
// Time complexity: O(n)

LinkedList.prototype.appendToTail = function(value) {
  var nodeToAppend = new Node(value);
  this.tail.next = nodeToAppend;
  this.tail = nodeToAppend;
};
// Time complexity: O(1)
LinkedList.prototype.removeTail = function() {
  var parent = this.head;
  while (parent !== null) {
    if (parent.next === this.tail) { 
      parent.next = null
      this.tail = parent;
    }
    else parent = parent.next;
  }
};
// Time complexity: O(n)


// PART 2:

LinkedList.prototype.insertBefore = function(refNode, value) {
  var parent = this.head;
  var nodeToInsert = new Node(value);
  if(refNode === this.head) this.insertHead(value);
  else {
    while (parent !== null) {
      if (parent.next === refNode) { 
        parent.next = nodeToInsert;
        nodeToInsert.next = refNode;
        parent = parent.next;
      }
      else parent = parent.next;
    }
  }
};
// Time complexity: O(n)

LinkedList.prototype.removeBefore = function(refNode) {
  // implement me...
  var parent = this.head;
  if (refNode === this.head) console.log('There is nothing before head node');
  while (parent !== null) {
    if (parent.next === refNode) { 
      parent.next = refNode.next;
    }
    else parent = parent.next;
  }
};
// Time complexity: O(n)

// var ll = new LinkedList(1);
// ll.insertAfter(ll.head, 2)
// ll.insertAfter(ll.head, 3)
// ll.insertAfter(ll.head, 4)
// console.log(ll.print())
// ll.insertHead(0);
// ll.insertHead(-1);
// ll.insertHead(-2);
// console.log(ll.print())
// console.log(ll.findNode(3))
// ll.appendToTail(10)
// ll.appendToTail(11)
// ll.appendToTail(12)
// ll.removeTail()
// ll.removeTail()
// console.log(ll.print())
// ll.insertBefore(ll.head, '|||')
// ll.removeBefore(ll.head.next);
// console.log(ll.print())
  
// Implement a circularly linked list:
function Node(value) {
  this.next = null;
  this.value = value;
}

function CircularLL(headValue) {
  if (headValue === undefined) console.log('Must provide value for first node');
  this.head = new Node(headValue);
  this.tail = this.head;
}

CircularLL.prototype.forEach = function(callback) {
  var parent = this.head;
  while (parent.next !== this.head) {
    callback(parent.value);
    parent = parent.next;
  }
};
// Time complexity: O(n)

CircularLL.prototype.print = function() {
  var parent = this.head;
  var outStrArr = [];
  while (true) {
    if (parent === this.tail) {
      outStrArr.push(parent.value);
      break;
    }
    outStrArr.push(parent.value);
    parent = parent.next;
  }
  return outStrArr.join(',')
};
// Time complexity: 

CircularLL.prototype.appendToTail = function(value) {
  var nodeToAppend = new Node(value);
  this.tail.next = nodeToAppend;
  this.tail = nodeToAppend;
  this.tail.next = this.head;  
};
// Time complexity:

CircularLL.prototype.removeTail = function() {
  var parent = this.head;
  if (this.tail === this.head) return console.log('List only have one node');
  else {
    while (true) {
      if (parent.next === this.tail) {
        parent.next = null;
        this.tail = parent;
        break;
      } else parent = parent.next;
    }
  }
};
// Time complexity:

CircularLL.prototype.insertAfter = function(node, value) {
  var nodeToInsert = new Node(value);
  if (node.next === null) {
    node.next = nodeToInsert;
    this.tail = nodeToInsert;
  } else {
    nodeToInsert.next = node.next;
    node.next = nodeToInsert;
  }
};
// Time complexity:

CircularLL.prototype.removeAfter = function(node) {
  var parent = this.head;
  if (this.tail === this.head) return console.log('List only have one node');
  else if (node === this.tail) this.removeHead();
  else {
    while (true) {
      if (parent === node) {
        node.next = node.next.next;
        break;
      } else parent = parent.next;
    }
  }
};
// Time complexity:

CircularLL.prototype.insertHead = function(value) {
  var nodeToInsert = new Node(value);
  nodeToInsert.next = this.head;
  this.head = nodeToInsert;
  this.tail.next = this.head;
};
// Time complexity:

CircularLL.prototype.removeHead = function() {
  this.head = this.head.next;
  this.tail.next = this.head;
}

CircularLL.prototype.findNode = function(value) {
  var parent = this.head;
  while (parent.value !== value) {
    if (parent === this.tail) return 'Not found';
    else parent = parent.next;
  }
  return parent
};
// Time complexity:



// PART 2:

CircularLL.prototype.insertBefore = function(node, value) {
  var nodeToInsert = new Node(value);
  var parent = this.head;
  if(node === this.head) this.insertHead(value);
  else {
    while(true) {
      if (parent.next === node) {
        nodeToInsert.next = parent.next;
        parent.next = nodeToInsert;
        break;
      } else parent = parent.next
    }
  }
};
// Time complexity:

CircularLL.prototype.removeBefore = function(node) {
  var parent = this.head;
  if (this.head.next === node) this.removeHead();
  else if(node === this.head) this.removeTail();
  else {
    while(true) {
      if (parent.next.next === node) {
        parent.next = node;
        break;
      } else parent = parent.next
    }
  }
};
// Time complexity:

// var ll = new CircularLL(1);
// ll.appendToTail(10)
// ll.appendToTail(11)
// ll.appendToTail(12)
// console.log(ll.print())
// // ll.removeTail()
// // ll.removeTail()
// // console.log(ll.print())
// ll.insertAfter(ll.head, 2)
// ll.insertAfter(ll.head, 3)
// ll.insertAfter(ll.head, 4)
// console.log(ll.print())
// ll.removeAfter(ll.head)
// ll.removeAfter(ll.head)
// console.log(ll.print())
// ll.insertHead(0);
// ll.insertHead(-1);
// ll.insertHead(-2);
// console.log(ll.print())
// ll.removeHead();
// ll.removeHead();
// console.log(ll.print())
// // console.log(ll.findNode(11))
// ll.insertBefore(ll.head.next, '|||')
// console.log(ll.print())
// ll.removeBefore(ll.head.next);
// console.log(ll.print())
// // console.log(ll.print())

/*------------------------------------------------ */
function Node(value) {
  this.next = null;
  this.prev = null;
  this.value = value;
}

function DoubleLL(headValue) {
  if (headValue === undefined) console.log('Must provide value for first node');
  this.head = new Node(headValue);
  this.tail = this.head;
}

DoubleLL.prototype.forEach = function(callback) {
  var parent = this.head;
  if (this.head = this.tail) callback(this.head.value);
  else {
    while (true) {
      if (parent.next !== this.head) {
        callback(parent.value);
        break; 
      }
      callback(parent.value);
      parent = parent.next
    }
  }
};
// Time complexity:

DoubleLL.prototype.print = function() {
  var parent = this.head;
  var outStrArr = [];
  if (this.head === this.tail) outStrArr.push(this.head.value);
  else {
    while (true) {
      if (parent.next === this.head) {
        outStrArr.push(parent.value);
        break; 
      }
      outStrArr.push(parent.value);
      parent = parent.next;
    }
  }
  return outStrArr.join(',')
};
// Time complexity:

DoubleLL.prototype.appendToTail = function(value) {
  var nodeToAppend = new Node(value);
  this.tail.next = nodeToAppend;
  nodeToAppend.prev = this.tail;
  this.tail = nodeToAppend;
  this.tail.next = this.head;
  this.head.prev = this.tail;
};
// Time complexity:
DoubleLL.prototype.removeTail = function() {
  if (this.tail === this.head) return console.log('List only have one node');
  else {
    this.tail.prev.next = this.head;
    this.tail = this.tail.prev;
  }
};
// Time complexity:

DoubleLL.prototype.insertAfter = function(node, value) {
  var nodeToInsert = new Node(value);
  if (this.head === this.tail) this.appendToTail(value);
  else {
    nodeToInsert.next = node.next;
    nodeToInsert.prev = node;
    node.next.prev = nodeToInsert;
    node.next = nodeToInsert;
  }
};
// Time complexity:

DoubleLL.prototype.removeAfter = function(node) {
  if (this.head === this.tail) console.log('List only have one node');
  else {  
    node.next.next.prev = node;
    node.next = node.next.next;
  }
};
// Time complexity:

DoubleLL.prototype.insertHead = function(value) {
  var nodeToInsert = new Node(value);
  nodeToInsert.prev = this.head.prev; // this.tail
  this.head.prev = nodeToInsert;
  nodeToInsert.next = this.head;
  this.head = nodeToInsert;
  this.tail.next = this.head;
};
// Time complexity:

DoubleLL.prototype.removeHead = function() {
  this.head.next.prev = this.tail;
  this.head = this.head.next;
  this.tail.next = this.head;
}

DoubleLL.prototype.findNode = function(value) {
  var parent = this.head;
  while (parent.value !== value) {
    if (parent === this.tail) return 'Not found';
    else parent = parent.next;
  }
  return parent;
};
// Time complexity:


// PART 2:

DoubleLL.prototype.insertBefore = function(node, value) {
  var nodeToInsert = new Node(value);
  if(node === this.head) this.insertHead(value);
  else {
    nodeToInsert.next = node;
    nodeToInsert.prev = node.prev;
    node.prev.next = nodeToInsert;
    node.prev = nodeToInsert;
  }
};
// Time complexity:

DoubleLL.prototype.removeBefore = function(node) {
  if (this.head.next === node) this.removeHead();
  else if(node === this.head) this.removeTail();
  else {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
};
// Time complexity:


// var ll = new DoubleLL(1);
// ll.appendToTail(10)
// ll.appendToTail(11)
// ll.appendToTail(12)
// console.log(ll.print())
// // ll.removeTail()
// // ll.removeTail()
// // console.log(ll.print())
// ll.insertAfter(ll.head, 2)
// ll.insertAfter(ll.head, 3)
// ll.insertAfter(ll.head, 4)
// console.log(ll.print())
// ll.removeAfter(ll.head)
// ll.removeAfter(ll.head)
// console.log(ll.print())
// ll.insertHead(0);
// ll.insertHead(-1);
// ll.insertHead(-2);
// console.log(ll.print())
// ll.removeHead();
// ll.removeHead();
// console.log(ll.print())
// // console.log(ll.findNode(11))

// ll.insertBefore(ll.head.next, '|||')
// console.log(ll.print())
// ll.removeBefore(ll.head.next);
// console.log(ll.print())

  /*
  *** Exercises:
  1. Implement a stack using a linked list.
  2. Implement a queue using a linked list.
  3. Write a method that remove duplicates from an unsorted linked list. What is the time complexity? Re-implement the method without using any additional storage structure (constant space complexity). What is the time complexity?
  4. Reverse a linked list. Do not use any additional storage structures.
  5. Find the kth to last element of a singly linked list.
  6. Detect if a linked list has a loop.
  7. Check if a linked list is a palindrome.
  8. Given two linked lists that represent numbers, return a linked list that represents the sum of those numbers:
    4 2 5        (4 -> 2 -> 5)
  + 7 3 1        (7 -> 3 -> 1)
  --------
  1 1 5 6   (1 -> 1 -> 5 -> 6)
   */