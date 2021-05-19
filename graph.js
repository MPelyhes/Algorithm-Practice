class Graph {
  constructor(){
    this.adjacencyList = {};
  }
  addVertex(name){
    this.adjacencyList[name] = [];
  }
  addEdge(vertex1, vertex2){
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
}

const graph = new Graph();
graph.addVertex("Hello");
graph.addVertex("Goodbye");
graph.addVertex("HastaLaVista");
graph.addEdge("Hello", "Goodbye");
console.log(graph)