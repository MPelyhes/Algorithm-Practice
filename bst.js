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
}

let bst = new BinarySearchTree();

bst.insert(10);
bst.insert(12);
bst.insert(5);
bst.insert(11);
bst.insert(34)
bst.insert(1);
bst.insert(3);
console.log(bst.insert(10));
console.log(bst);