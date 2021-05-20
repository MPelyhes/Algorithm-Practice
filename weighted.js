class WeightedGraph {
  constructor(){
    this.adjacencyList = {};
  }
  addVertex(name){
    this.adjacencyList[name] = [];
  }
  addEdge(vertex1, vertex2, weight){
    this.adjacencyList[vertex1].push({node:vertex2, weight});
    this.adjacencyList[vertex2].push({node:vertex1, weight});
  }
}

class PriorityQueue{
  constructor(){
    this.values = [];
  }
  enqueue(val, priority){
    this.values.push({val, priority});
    this.sort();
  };
  dequeue(){
    return this.values.shift();
  };
  sort(){
    this.values.sort((a,b) => a.priority - b.priority);
  };
}

let graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B", 9);
graph.addEdge("A", "C", 5);
graph.addEdge("B", "C", 7);

console.log(graph.adjacencyList);