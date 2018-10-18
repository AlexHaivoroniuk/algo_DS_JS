/*
HASH TABLE
Collection of key-value pairs.
Map keys to values for efficient lookup.
Use an array as the underlying data structure.
Hash table should have a size - this will be used by the hashing function to determine what index to map the key to.
A hashing function is used to map the key to an integer, which is the index that the value is to be stored at.
Since our hashing function might map multiple keys to the same integer, we have to deal with collisions by creating buckets at each index of the storage array. These buckets can be arrays or linked lists.
*** Note:
ES6 includes a Map data structure. It differs from the JavaScript object because the keys can be any value (not just strings like for objects), there is a size property, and there is a guaranteed order (the insertion order).
Hash tables are also referred to as hash mapse or dictionaries.
*** Operations:
myMap.set(key, value)
=> myMap object
Store the key-value pair in the storage array.
If the key already exists, replace stored value with new value.
Use the hashing function to map the key to an integer and store the value at the corresponding index.
Account for the possibility of collisions.
myMap.get(key)
=> value associated with key, or undefined if none
myMap.has(key)
=> true/false depending on if a value has been associated with the key
myMap.delete(key)
=> true if a value was associated with the key
=> false if a value was never associated with the key
Remove any value associated to the key
myMap.count()
=> integer number of key/value pairs in hash table
myMap.forEach(callbackFn)
=> no returned value
Invokes callback function once for each key-value pair in the hash table
*** Additional Exercises:
Resize the hash table:
- if the count becomes greater than 75% of the table size, double the table size and redistribute the key/value pairs
- if the count becomes less than 25% of the table size, cut the table size in half and redistribute the key/value pairs
*/

/*
//PSEUDO
//Write a function that takes and input and always returns the same output*.

myHash(input) (string..?)
  "HELLO ARE WE THERE YET?" => 764.32Z
  "HELLO ARE WE THERE YET?" => 764.32Z
  "HELLO OTHER THING THAT I'M YELLING?" => 43
  "HELLO OTHER THING THAT I'M YELLING?" => 43
  1. ascii value of each charecter
  2. added or multiplied them together
  3. then return it as hex instead of decimal
//prseudo code out a hash table!

Constructor
  storage = [und,und, und, und, und];
  hashingFunc(v) => index for the array (0-4);

  set(key, val) key === "thingamajig", true
    // save the value in the array
        run the hashFunc(key) => 3
        save true to the 3rd index of out storage
  
  get(key) "thingamajig"
    //return the value saved in storage
    run hashFunc on key again, will return the same value
    value (eg. 3 form 'thingamajig');
    retrieve value from storage 
    unsing index from the hashFunc
  
    remove(key)
      set the value at the index to null
      hash the key to get the index
      lokk up index on storage, set that to null

*Not the same as the input
*/

// Simple hashing function to use in your implementation
function simpleHash(str, tableSize) {
    var hash = 0;
    for (var i=0; i<str.length; i++) {
      hash += str.charCodeAt(i) * (i+1);
    }
    return hash % tableSize;
  }
  // source: http://pmav.eu/stuff/javascript-hashing-functions/source.html
  
  function HashTable(tableSize) {
    this._size = tableSize || 50;
    this._storage = Array(this._size);
    this._count = 0;
  }
  
  // This is a helper method that you may want to implement to help keep your code DRY
  // You can implement the hash table methods without it.
  // I recommend skipping it and coming back if you find that it will be useful
  HashTable.prototype.find = function(key) {
    var hash = simpleHash(key, this._size);
    this._storage[hash] = this._storage[hash] || [];  
    var bucket = this._storage[hash];
    var match;
    var matchIndex;
    bucket.forEach((item, index) => {
      if (item.hasOwnProperty(key)) {
        match = item;
        matchIndex = index;
      }
    }) 
    return {
      match: match,
      bucket: bucket,
      matchIndex: matchIndex
    };
  };
  
  HashTable.prototype.resize = function(newSize) {
    var oldStorage = this._storage;
    this._size = newSize;
    this._count = 0;
    this._storage = [];
    var that = this;
    oldStorage.forEach((bucket) => {
      bucket.forEach((item) => {
        var key = Object.keys(item)[0];
        that.set(key, item[key]);
      });
    });
  };


  HashTable.prototype.set = function(key, value) {
    var match = this.find(key).match;
    var bucket = this.find(key).bucket;
    if (match) {
      match[key] = value;
    } else {
      var newItem = {};
      newItem[key] = value;
      this._count++;
      bucket.push(newItem);
      if (this._count > 0.75*this._size) {
        this.resize(2*this._size);
      }
    }
    return this;
  };
  // Time complexity: O(1);
  
  HashTable.prototype.get = function(key) {
    var match =  this.find(key).match;
    return match && match[key];
  };
  // Time complexity:
  
  HashTable.prototype.has = function(key) {
    return !!this.find(key).match;
  };
  // Time complexity:
  
  HashTable.prototype.delete = function(key) {
    var match =  this.find(key).match;
    if(match) {
      var bucket =  this.find(key).bucket;
      var matchIndex =  this.find(key).matchIndex;
      bucket.splice(matchIndex, 1);
      this._count--;
      if (this._count < 0.25*this._size) {
        this.resize(0.5*this._size);
      }
    }
    return !!match;
  };
  // Time complexity:
  
  HashTable.prototype.count = function() {
    return this._count;
  };
  // Time complexity:
  
  HashTable.prototype.forEach = function(callback) {
    this._storage.forEach(bucket => {
      bucket = bucket || [];
      bucket.forEach(item => {
        callback(item);
      });
    })
  };
  // Time complexity:
  
  
  
  /*
  *** Exercises:
  1. Implement a hash table with a binary search tree.
  2. Given two arrays with values, return the values that are present in both. Do this in linear time.
  3. Implement a hash table using linked lists for collision-handling. Why might this be preferable to using arrays.
  */

var ht = new HashTable(10);

ht.set('ggg', 50);
ht.set('vbb', 12);
ht.set('rtrt', 'value');
console.log(ht._storage);
console.log(ht.get('ggg'));
console.log(ht.get('vbb'));
console.log(ht.get('rtrt'));
console.log(ht._storage);
ht.delete('rtrt');
console.log(ht._storage);