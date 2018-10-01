/*
QUEUE
Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.
*** Operations:
myQueue.enqueue(value)
=> count of queue
add value to collection
myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection
myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection
myQueue.count()
=> number of elements in queue
*** Additional Exercises:
Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."
Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?
Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?
 */
const Stack = require('./Stack').Stack;

function Queue(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this.__head = 0;
    this.__tail = 0;
    // implement me...
  }
  
  Queue.prototype.enqueue = function(value) {
    // implement me...
    if (this._capacity >= this.count()) {
        this._storage[this.__tail++] = value;
        console.log('_storage', this._storage)
        return this.count();
    } 
    console.log('Max _capacity already reached. Remove element before adding a new one.')
    return 'Max _capacity already reached. Remove element before adding a new one.'
};
// Time complexity:  O(1)

Queue.prototype.dequeue = function() {
    // implement me...
    var dequeueEl = this._storage[this.__head];
    delete this._storage[this.__head++];
    console.log('_storage', this._storage)
    if (this.__head > this.__tail) this.__head++;
    return dequeueEl;
  };
  // Time complexity:  O(1)
  
  Queue.prototype.peek = function() {
    // implement me...
    return this._storage[this.__tail];
  };
  
  Queue.prototype.count = function() {
    // implement me...
    return this.__tail - this.__head;
  };
  // Time complexity:  O(1)


  Queue.prototype.contains = function(value) {
    for(val in this._storage) {
      if (this._storage[val] === value) return true;
    }
    return false;
  }  
  // Time complexity: O(1)

  Queue.prototype.until = function(value) {
    var queueNum = 0;
    for(val in this._storage) {
      if (this._storage[val] === value) return queueNum;
      queueNum++;
    }
    return null;
  }

  
  var q = new Queue();

  /*
  *** Exercises:
  1. Implement a queue using two stacks.
  2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.
  3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.
   */


  // 1. Implement a queue using two stacks.

  function transferStack(fromStk, toStk) {
    while( fromStk.count() > 0) {
      toStk.push(fromStk.pop());
    }
  }

  function TwoStackQueue(capacity) {
    this._capacity = capacity || Infinity; 
    this._stackIn = new Stack();
    this._stackOut = new Stack();
    // implement me...
  }
  
  TwoStackQueue.prototype.enqueue = function(value) {
    // implement me...
    if (this._capacity >= this.count()) {
        this._stackIn.push(value);
        console.log('_stackIn', this._stackIn._storage)
        console.log('_stackOut', this._stackOut._storage)
        return this.count();
      } 
      console.log('Max _capacity already reached. Remove element before adding a new one.')
      return 'Max _capacity already reached. Remove element before adding a new one.'
    };
    // Time complexity:  O(1)
    
    TwoStackQueue.prototype.dequeue = function() {
    // implement me...
    var dequeueEl = null;
    while( this._stackIn.count() > 0) {
      this._stackOut.push(this._stackIn.pop());
    }
    transferStack(this._stackIn, this._stackOut);

    dequeueEl = this._stackOut.pop();
    
    transferStack(this._stackOut, this._stackIn);

    return dequeueEl;
  };
  // Time complexity:  O(1)
  
  TwoStackQueue.prototype.peek = function() {
    // implement me...
    transferStack(this._stackIn, this._stackOut);
    var peek = this._stackOut.peek(); 
    transferStack(this._stackOut, this._stackIn);
    return peek;
  };
  
  TwoStackQueue.prototype.count = function() {
    // implement me...
    return this._stackIn.count();
  };
  // Time complexity:  O(1)


  TwoStackQueue.prototype.contains = function(value) {
    return this._stackIn.contains(value);
  }  
  // Time complexity: O(1)

  TwoStackQueue.prototype.until = function(value) {
    var queueNum = 0;
    for(val in this._storage) {
      if (this._storage[val] === value) return queueNum;
      queueNum++;
    }
    return null;
  }

  
  var q = new TwoStackQueue();


// 2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.

function DoubleEndQueue(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this.__head = 0;
  this.__tail = 0;
  // implement me...
}

DoubleEndQueue.prototype.enqueueLeft = function(value) {
  // implement me...
  console.log('enqueueLeft')
  if (this._capacity >= this.count()) {
      var head = this.__head;
      var newStorage = {};
      for (item in this._storage) {
        newStorage[++head] = this._storage[item];
      }
      this.__tail = head;
      // console.log('newStorage', newStorage)
      newStorage[this.__head] = value;
      // console.log('newStorage', newStorage)
      this._storage = Object.assign({}, newStorage );
      console.log('_storage', this._storage)
      return this.count();
  } 
  console.log('Max _capacity already reached. Remove element before adding a new one.')
  return 'Max _capacity already reached. Remove element before adding a new one.'
};
DoubleEndQueue.prototype.enqueueRight = function(value) {
  // implement me...
  console.log('enqueueRight')
  if (this._capacity >= this.count()) {
      this._storage[this.__tail++] = value;
      console.log('_storage', this._storage)
      return this.count();
  } 
  console.log('Max _capacity already reached. Remove element before adding a new one.')
  return 'Max _capacity already reached. Remove element before adding a new one.'
};
// Time complexity:  O(1)

DoubleEndQueue.prototype.dequeueLeft = function() {
  // implement me...
  console.log('dequeueLeft')
  var dequeueEl = this._storage[this.__head];
  delete this._storage[this.__head++];
  console.log('_storage', this._storage)
  if (this.__head > this.__tail) this.__head++;
  return dequeueEl;
};
// Time complexity:  O(1)

DoubleEndQueue.prototype.dequeueRight = function() {
  // implement me...
  console.log('dequeueRight')
  var dequeueEl = this._storage[this.__tail];
  delete this._storage[this.__tail--];
  console.log('_storage', this._storage)
  if (this.__head > this.__tail) this.__head++;
  return dequeueEl;
};
// Time complexity:  O(1)

DoubleEndQueue.prototype.peekLeft = function() {
  // implement me...
  return this._storage[this.__head];
};
DoubleEndQueue.prototype.peekRight = function() {
  // implement me...
  return this._storage[this.__tail];
};

DoubleEndQueue.prototype.count = function() {
  // implement me...
  return this.__tail - this.__head;
};
// Time complexity:  O(1)


DoubleEndQueue.prototype.contains = function(value) {
  for(val in this._storage) {
    if (this._storage[val] === value) return true;
  }
  return false;
}  
// Time complexity: O(1)

DoubleEndQueue.prototype.until = function(value) {
  var queueNum = 0;
  for(val in this._storage) {
    if (this._storage[val] === value) return queueNum;
    queueNum++;
  }
  return null;
}


var q = new DoubleEndQueue();


// 3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.
