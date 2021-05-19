class Graph {
  constructor(){
    this.adjacencyList = {};
  }
  addVertex(name){
    this.adjacencyList[name] = [];
  }
}

const graph = new Graph();
graph.addVertex("Hello");
graph.addVertex("Goodbye");
graph.addVertex("HastaLaVista");
console.log(graph)