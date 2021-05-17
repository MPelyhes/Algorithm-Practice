class Node {
  constructor(value, priority){
    this.value = value;
    this.priority = priority;
  }
}

class MinBinaryHeap {
  constructor(){
    this.values = [];
  }
  enqueue(value, priority){
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    let index = this.values.length - 1;
    while(index > 0){
      let parentIndex = Math.floor((index -1)/2);
      let parent = this.values[parentIndex];
      if(newNode.priority >= parent.priority) break;
      this.values[parentIndex] = newNode;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  dequeue(){
    const removed = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0){
      this.values[0] = end;
      this.sinkDown();
    }
    return removed;
  }
  sinkDown(){
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true){
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if(leftChildIdx < length){
        leftChild = this.values[leftChildIdx];
        if(leftChild.priority < element.priority){
          swap = leftChildIdx;
        }
      }
      if(rightChildIdx < length){
        rightChild = this.values[rightChildIdx];
        if(
          (swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)
        ){
          swap = rightChildIdx;
        }
      }

      if(swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let priorityQueue = new MinBinaryHeap();
priorityQueue.enqueue("This is cool", 5);
priorityQueue.enqueue("This is not cool at all!", 3);
priorityQueue.enqueue("This is a real life emergency!", 1);
priorityQueue.enqueue("This is a realer life emergency!", 0);
priorityQueue.enqueue("This is a fake life emergency!", 2);
priorityQueue.dequeue();



console.log(priorityQueue)