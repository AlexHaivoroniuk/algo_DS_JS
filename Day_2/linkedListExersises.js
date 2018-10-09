
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


// 1. Implement a stack using a linked list.


function Node(value) {
    this.next = null;
    this.value = value; 
}

function StackLL(headValue) {
    if (headValue === undefined) console.log('Must provide value for first node');
    this.head = new Node(headValue);
    this.tail = this.head;
}

StackLL.prototype.print = function() {
    var parent = this.head;
    var outStrArr = [];
    while (true) {
      if (parent === this.tail) { 
        outStrArr.push(parent.value)
        break;
      }
      outStrArr.push(parent.value);
      parent = parent.next;
    }
    return outStrArr.join(',');
};
// Time complexity:

StackLL.prototype.findNode = function(value) {
    var parent = this.head;
    while (parent !== null) {
      if (parent.value === value) return parent;
      parent = parent.next;
      if (parent === null) return console.log('No node with such value');
    }
};
// Time complexity:

StackLL.prototype.push = function(value) {
    var nodeToAppend = new Node(value);
    this.tail.next = nodeToAppend;
    this.tail = nodeToAppend;
};
// Time complexity:
StackLL.prototype.pop = function() {
    var parent = this.head;
    if (this.head === this.tail) console.log('List only have one node');
    while (parent !== null) {
      if (parent.next === this.tail) { 
        parent.next = null
        this.tail = parent;
      }
      else parent = parent.next;
    }
};
// Time complexity:
 

// var ll = new StackLL(1);
// ll.push(10)
// ll.push(11)
// ll.push(12)
// ll.pop()
// ll.pop()
// console.log(ll.print())


// 2. Implement a queue using a linked list.


function Node(value) {
    this.next = null;
    this.value = value;
}

function QueueLL(headValue) {
    if (headValue === undefined) console.log('Must provide value for first node');
    this.head = new Node(headValue);
    this.tail = this.head;
}

QueueLL.prototype.forEach = function(callback) {
// implement me...
};
// Time complexity:

QueueLL.prototype.print = function() {
    var parent = this.head;
    var outStrArr = [];
    while (true) {
      if (parent === this.tail) { 
        outStrArr.push(parent.value)
        break;
      }
      outStrArr.push(parent.value);
      parent = parent.next;
    }
    return outStrArr.join(',');
};


QueueLL.prototype.enqueue = function(value) {
    var nodeToAppend = new Node(value);
    this.tail.next = nodeToAppend;
    this.tail = nodeToAppend;
};

QueueLL.prototype.dequeue = function() {
    this.head = this.head.next;

}

QueueLL.prototype.findNode = function(value) {
    var parent = this.head;
    while (parent !== null) {
      if (parent.value === value) return parent;
      parent = parent.next;
      if (parent === null) return console.log('No node with such value');
    }
};

// var ll = new QueueLL(1);
// ll.enqueue(10)
// ll.enqueue(11)
// ll.enqueue(12)
// console.log(ll.print())
// ll.dequeue()
// ll.dequeue()
// console.log(ll.print())


//V // 3. Write a method that remove duplicates from an unsorted linked list. What is the time complexity? Re-implement the method without using any additional storage structure (constant space complexity). What is the time complexity?
//V // 4. Reverse a linked list. Do not use any additional storage structures.
//X // 5. Find the kth to last element of a singly linked list.
//X // 6. Detect if a linked list has a loop.
//X // 7. Check if a linked list is a palindrome.

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
    while (parent !== null) {
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

LinkedList.prototype.removeDuplicates = function() {
  var parent = this.head;
  if (this.head === this.tail) console.log('List only have one node');
  while (parent !== null) {
    if (parent.next && parent.value === parent.next.value) { 
      parent.next = parent.next.next;
    }
    else parent = parent.next;
  }
};
LinkedList.prototype.reverseList = function() {
  var parent = this.head;
  if (this.head === this.tail) console.log('List only have one node');
  while (parent !== null) {
    if (parent.next && parent.value === parent.next.value) { 
      parent.next = parent.next.next;
    }
    else parent = parent.next;
  }
};

LinkedList.prototype.reverseList = function() {
  var current = this.head
  var prevP = null;
  var nextP = null;
  while (current !== null) {
    nextP = current.next;
    current.next = prevP;

    prevP = current;
    current = nextP;
  }
  this.head = prevP;
};

LinkedList.prototype.reverseList = function() {
  var current = this.head
  var prevP = null;
  var nextP = null;
  while (current !== null) {
    nextP = current.next;
    current.next = prevP;

    prevP = current;
    current = nextP;
  }
  this.head = prevP;
};

var ll = new LinkedList(1);

// 3.
// ll.appendToTail(1)
// ll.appendToTail(1)
// ll.appendToTail(1)
// ll.appendToTail(2)
// ll.appendToTail(2)
// ll.appendToTail(2)
// ll.appendToTail(2)
// ll.appendToTail(3)
// ll.appendToTail(3)
// ll.appendToTail(3)
// ll.appendToTail(3)
// ll.appendToTail(3)
// ll.appendToTail(3)
// console.log(ll.print())
// ll.removeDuplicates()
// console.log(ll.print())

// 4.

// ll.appendToTail(2)
// ll.appendToTail(3)
// ll.appendToTail(4)
// ll.appendToTail(5)
// ll.appendToTail(6)
// ll.appendToTail(7)
// ll.appendToTail(8)
// console.log(ll.print())
// ll.reverseList();
// console.log(ll.print())

// 5.