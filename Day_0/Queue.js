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