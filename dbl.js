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
  unshift(val){
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index){
    if(index < 0 || index >= this.length) return null;
    if(index <= Math.floor(this.length/2)){
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    } else {
      let counter = this.length - 1;
      let currentNode = this.tail; 
      while(counter !== index){
        currentNode = currentNode.prev;
        counter--;
      }
      return currentNode;
    }
  }
  set(index, value){
    let updated = this.get(index);
    if(updated !== null){
      updated.val = value;
      return true;
    }
    return false;
  }
  insert(index, value){
    if(index < 0 || index >= this.length) return false;
    if(index === 0) return !!this.unshift(value);
    if(index === this.length) return !!this.push(value);
    let newNode = new Node(value);
    let foundNode = this.get(index - 1);

    newNode.next = foundNode.next;
    newNode.prev = foundNode;
    foundNode.next.prev = newNode;
    foundNode.next = newNode;

    this.length++;
    return true
  }
  remove(index){
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();

    let foundNode = this.get(index);
    let prevNode = foundNode.prev;
    let nextNode = foundNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    foundNode.next = null;
    foundNode.prev = null;

    this.length--;
    return foundNode;
  }
}

let list = new DoublyLinkedList();

list.push("Hi, again.");
list.push("Is it me you're looking for?");
list.push("Well, here I am!");
console.log(list.remove(0));
console.log(list);
