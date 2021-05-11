//Doubly Linked List

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val){
    let newNode = new Node(val);
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop(){
    if(!this.head) return undefined;
    let oldTail = this.tail;
    if(this.length === 1) {
      this.head =null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }
  shift(){
    if(!this.head) return undefined;
    let oldHead = this.head;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
}

let list = new DoublyLinkedList();

list.push("Hi, again.");
list.push("Is it me you're looking for?");
list.push("Well, here I am!");
console.log(list.shift());
console.log(list);
