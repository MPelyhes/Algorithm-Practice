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
    if(this.length === 0){
      let nodeVal = new Node(val);
      this.head = nodeVal;
      this.tail = nodeVal;
    } else {
        let nodeVal = new Node(val);
        this.tail.next = nodeVal;
        this.tail = nodeVal;
  }
  this.length += 1;
}
}

let list = new SinglyLinkedList();
list.push("hello");
list.push("goodbye");
list.push("I don't know why you say hello");
list.push("I say goodbye");
console.log(list);