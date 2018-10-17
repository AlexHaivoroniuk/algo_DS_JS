/*
GRAPHS
Abstract data type
Basic Graph:
Stores nodes (represented by any primitive value) and the neighbors for each node. This implementation represents a graph as an adjacency list (https://en.wikipedia.org/wiki/Adjacency_list).
Here's an example:
1---2---3
 \ /
  4
graph = {
  1: [2, 4],
  2: [1, 3, 4],
  3: [2],
  4: [1, 2]
}
Constraints:
This graph implementation is undirected and can have unconnected nodes. The nodes are represented by unique primitive values.
*** Operations:
graph.addNode(value) // value must be a primitive
=> undefined
Add node to graph
graph.removeNode(value)
=> undefined
Remove node from graph
graph.contains(value)
=> true/false
Returns true if value is found in graph, false otherwise
graph.addEdge(value1, value2)
=> undefined
Create connection between two nodes if they're both present in the graph
graph.removeEdge(value1, value2)
=> undefined
Remove connection between two nodes
graph.hasEdge(value1, value2)
=> true/false
Returns true if edge exists, false otherwise
graph.forEach(callback)
=> undefined
Traverse the graph and invoke the passed callback once for each node. The callback function receives the following for each node: node value, node Neighbors, all nodes.
Implement traversal methods for depth-first and breadth-first traversal. The methods take a starting node and a callback that gets invoked for each node. The callback should receive two arguments: the node value and the distance (number of edges that separate the node from the starting node). See example usage below.
graph.traverseDepthFirst(value1, callback)
=> undefined
Starting at the node with the value passed in, traverse the graph and invoke the callback for each node in a depth-first fashion.
graph.traverseBreadthFirst(value, callback)
=> undefined
Starting at the node with the value passed in, traverse the graph and invoke the callback for each node in a breadth-first fashion.
Example Usage:
1---2---3---5
 \ /
  4
{
  '1': [ 2, 4 ],
  '2': [ 1, 3, 4 ],
  '3': [ 2, 5 ],
  '4': [ 1, 2 ],
  '5': [ 3 ]
}
var traverseDF = [];
graph.traverseDepthFirst(1, function(val, distance) { traverseDF.push([val, distance]) });
traverseDF should be [ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ], [ 5, 3 ], [ 4, 2 ] ]
var traverseBF = [];
graph.traverseBreadthFirst(1, function(val, distance) { traverseBF.push([val, distance]) });
traverseBF should be [ [ 1, 0 ], [ 2, 1 ], [ 4, 1 ], [ 3, 2 ], [ 5, 3 ] ]
*** Additional Exercises:
Given a directed graph and two nodes in the graph, write a function that indicates whether there is a route between the two nodes. Bonus: rather than returning a boolean, have your function return the shortest distance between the two nodes (the number of edges that separate them).
*/

/*
Pseudo code

((((-------adjacency matrix------))))

Constructor
    initialize matrix

addNode(5) // assume  node os 1-10 (value? order?)
    // How do we add the node? 
    // Do we add to and akready-existing matrix
    // Do we add a column/row everytime


addEdge() // directed? weighted
    //matrix[2,4] = 1
    //matrix[4,2] = 1

((((------adjacency matrix---------))))

Constructor
    nodes = [];

addNode(val)
    nodes[val] = nodes[val] || [];

graph.addNode(1)
[undefined, []]
graph.addNode(2)
[undefined, [], []]
graph.addNode(5)
[undefined, [], [], undefined, undefined, []]

addEdge(v1, v2)
    nodes[v1].push(v2)
    nodes[v2].push(v1)

//Consider 
// How could we represent (un)directed edges?
// How could we represent weighted edges?

*/

function Graph () {
    this._nodes = {};
}

Graph.prototype.addNode = function(value) {
  if (value === undefined) return;
  this._nodes[value] = this._nodes[value] || [];
};
// Time complexity:

Graph.prototype.removeNode = function(value) {
  // implement me...
};
// Time complexity:

Graph.prototype.contains = function(value) {
  return !!this._nodes[value];
};
// Time complexity:

Graph.prototype.addEdge = function(value1, value2) {
  if (!this._nodes[value1] || !this._nodes[value2])
      return 'Invalid node value';
  this._nodes[value1].push(value2);
  this._nodes[value2].push(value1);
};
// Time complexity:

Graph.prototype.removeEdge = function(value1, value2) {
  // implement me...
};
// Time complexity:

Graph.prototype.hasEdge = function(value1, value2) {
  return !!this._nodes[value1].includes(value2) && this._nodes[value2].includes(value1);
};
// Time complexity:

Graph.prototype.forEach = function(fn) {
  // implement me...
};
// Time complexity:


/*
DFS
      (1) _____ (3)
      /         /
    (2) _______(4)  (6) 
              \    /
                \  /
                (5) 



// visit 1
    visit 2
      visit 4
        visit 5
          visit 6
once there are node more unexplores nodes, return

each node needs to be visited and explored and be marked as explored

base case:
  not where to go (empty list)
  visited/explored
for i, loop through arr of edges
  traverse(this._nodes[value][i])

//TODO: Where do you put flags?
How many flags? explored?
visited?
*/

Graph.prototype.traverseDepthFirst = function(value, fn, visited, distance) {
  if (!this._nodes[value] || typeof fn !== 'function') return 'Invalid value or function';
  visited = visited || {};
  distance = distance || 0;
  fn(value, distance);
  visited[value] = true;
  this._nodes[value].forEach((neighbor) => {
    if (visited[neighbor]) return;
    this.traverseDepthFirst(neighbor, fn, visited, distance+1);
  }, this);
};
// Time complexity: O(n)
/*
BFS

Q - some order by layer such that the least deep nodes are processed first

HOW DO WE FIND FIRST QUEUE??
  Oh, we have that Adjacency list(AL)
4: [2,3,5]

Start with currentNode
  processs AL for currentNode
Then process next layers by 
looping through AL again
  recurse(this._nodes[2])

How do we get to the next layer?
Do we need  to recurse?
What about that flagging?

*/
Graph.prototype.traverseBreadthFirst = function(value, fn) {
  if (!this._nodes[value] || typeof fn !== 'function') return 'Invalid value or function';
  var visited = {};
  var queue = [value];
  visited[value] = 0;

  var recurseBF = (value, fn) => {
    visited.push(value);
    while (queue.length) {
        var node = queue.shift();
        console.log(node);
        this._nodes[value].forEach(neighbor => {
          if (visited.includes(neighbor)) return;  
          queue.push(neighbor);
        });
    }
  }

  recurseBF(value, fn);
};
// Time complexity:

var g = new Graph();

// g.addNode(1)  
// g.addNode(2)
// g.addNode(3)
// g.addNode(4)
// g.addNode(5)
// g.addNode(6)

// g.addEdge(1, 2);
// g.addEdge(1, 3);
// g.addEdge(3, 4);
// g.addEdge(2, 4);
// g.addEdge(4, 5);
// g.addEdge(5, 6);

//   console.log(g.contains(2));
//   console.log(g.hasEdge(2, 1));

g.addNode(1)  
g.addNode(2)
g.addNode(3)
g.addNode(4)
g.addNode(5)

g.addEdge(1, 2);
g.addEdge(1, 4);
g.addEdge(2, 3);
g.addEdge(2, 4);
g.addEdge(3, 5);

// // g.traverseDepthFirst(1, val => { console.log(val); }, false, 0);
// var traverseDF = [];
// g.traverseDepthFirst(1, (val, distance) => { traverseDF.push([val, distance]) }, false, 0);
// console.log(traverseDF);
// // traverseDF should be [ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ], [ 5, 3 ], [ 4, 2 ] ]

var traverseBF = [];
g.traverseBreadthFirst(1, function(val) { traverseBF.push(val) });
// console.log(traverseBF);
// traverseBF should be [ [ 1, 0 ], [ 2, 1 ], [ 4, 1 ], [ 3, 2 ], [ 5, 3 ] ]