// For the Data Structures section of the Algorithm and Data Structures Masterclass

//Singly Linked List Section

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    let nodeVal = new Node(val);
    if(!this.head){
      this.head = nodeVal;
      this.tail = nodeVal;
    } else {
        this.tail.next = nodeVal;
        this.tail = nodeVal;
    }
    this.length += 1;
    return this;
  }
  pop(){
    if(!this.head) return undefined;
    let currentNode = this.head;
    let newTail = currentNode;

    while(currentNode.next){
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }
  shift(){
    if(!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    currentHead.next = null;
    this.length--;
    if(this.length === 0){
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index){
    if(index < 0 || index >= this.length) return null;
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  set(index, val){
    let node = this.get(index);
    if(!node) return false;
    node.val = val;
    return true;
  }
  insert(index, val){
    if(index  < 0 || index > this.length) return false;
    if(index === this.length){
      this.push(val)
    } else if(index === 0){
    this.unshift(val);
    } else {
      let newNode = new Node(val);
      let findNode = this.get(index - 1);
      let oldNext = findNode.next;
      findNode.next = newNode;
      newNode.next = oldNext;
      this.length++;
    }
    return true;
  }
  remove(index){
    if(index < 0) return undefined;
    if(index === this.length - 1) return this.pop();
    if(index === 0) return this.shift();
    let findNode = this.get(index - 1);
    let deletedNode = findNode.next;
    findNode.next = deletedNode.next;
    this.length--;
    return deletedNode;
  }
}

let list = new SinglyLinkedList();
list.push("hello");
list.push("goodbye");
list.push("I don't know why you say hello");
list.push("I say goodbye");
// list.unshift("Hold up!")
// console.log(list.get(3));
console.log(list.remove(3))
console.log(list);