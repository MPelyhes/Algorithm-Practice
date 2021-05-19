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
  DFSRecursive(start){
    let result = [];
    let visited = {};
    let list = this.adjacencyList;

    function DFSHelper(vertex){
      if(!vertex) return;
      visited[vertex] = true;
      result.push(vertex);
      for(let value of list[vertex]){
        if(!visited[value]){
          DFSHelper(value);
        }
      }
    }

    DFSHelper(start);
    return result;
  }
  DFSIterative(start){
    let result = [];
    let visited = {};
    let stack = [];
    stack.push(start);

    while(stack.length){
      let currentVertex = stack.pop();
      if(!visited[currentVertex]){
        visited[currentVertex] = true;
        result.push(currentVertex);
        for(let neighbor of this.adjacencyList[currentVertex]){
          stack.push(neighbor);
        }
      }
    }

    return result;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph)

console.log(graph.DFSIterative("A"));