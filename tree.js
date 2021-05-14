//Implementations of various tree traversal methods

//Breadth First Search

const breadthFirstSearch = (tree) => {
  let queue = [tree["root"]];
  let visited = [];

  while(queue.length){
    let currentNode = queue.pop();
    visited.push(currentNode);
    if(currentNode["left"]){
      queue.unshift(currentNode["left"]);
    }
    if(currentNode["right"]){
      queue.unshift(currentNode["right"]);
    }
  }
  
  return visited;
}