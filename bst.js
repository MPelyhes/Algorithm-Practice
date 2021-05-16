//Implementation of a Binary Search Tree

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(val){
    let newNode = new Node(val);
    
    if(!this.root){
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while(true){
      if(newNode.value === currentNode.value) return undefined;
      if(newNode.value > currentNode.value){
        if(!currentNode.right){
          currentNode.right = newNode;
          return this;
        } 
          currentNode = currentNode.right;
      } else {
        if(!currentNode.left){
          currentNode.left = newNode;
          return this;
        } 
          currentNode = currentNode.left;
      }
    }
  }
  find(val){
    if(!this.root) return false;

    let currentNode = this.root;

    while(true){
      if(currentNode.value === val){
        return currentNode;
      }
      if(currentNode.value < val){
        if(!currentNode.right) return false;
        currentNode = currentNode.right;
      } else {
        if(!currentNode.left) return false;
        currentNode = currentNode.left;
      }
    }
  }
  BFS(){
    let queue = [];
    let visited = [];
    queue.push(this.root)

    while(queue.length){
      let currentNode = queue.pop();
      visited.push(currentNode);
      if(currentNode.left){
        queue.unshift(currentNode.left);
      }
      if(currentNode.right){
        queue.unshift(currentNode.right);
      }
    }
    
    return visited;
  }
  DFSPre(){
    let visited = [];
    let currentNode = this.root;

    let dfsHelper = function(node){
      visited.push(node.value);
      if(node.left) dfsHelper(node.left);
      if(node.right) dfsHelper(node.right);
    }

    dfsHelper(currentNode);

    return visited;
  }
}

let bst = new BinarySearchTree();

bst.insert(10);
bst.insert(12);
bst.insert(5);
bst.insert(11);
bst.insert(34)
bst.insert(1);
bst.insert(3);
console.log(bst.DFSPre());
// console.log(bst);