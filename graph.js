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
  removeEdge(vertex1, vertex2){
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(value => value !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(value => value !== vertex1 )
  }
  removeVertex(vertex){
    while(this.adjacencyList[vertex].length > 0){
      this.removeEdge(vertex, this.adjacencyList[vertex].pop());
    }
    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();
graph.addVertex("Hello");
graph.addVertex("Goodbye");
graph.addVertex("HastaLaVista");
graph.addEdge("Hello", "Goodbye");
graph.addEdge("Hello", "HastaLaVista");
console.log(graph)
graph.removeVertex("Hello");
console.log(graph)