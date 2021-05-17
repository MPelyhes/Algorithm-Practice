class MaxBinaryHeap {
  constructor(){
    this.values = [];
  }
  Insert(value){
    this.values.push(value);

    let index = this.values.length - 1;
    
    while(index > 0){
      let parentIndex = Math.floor((index -1)/2);
      let parent = this.values[parentIndex];
      if(value <= parent) break;
      this.values[parentIndex] = value;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  extractMax(){
    const max = this.values[0];
    const end = this.values.pop();
    if(this.values.length > 0){
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
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
        if(leftChild > element){
          swap = leftChildIdx;
        }
      }
      if(rightChildIdx < length){
        rightChild = this.values[rightChildIdx];
        if(
          (swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();

heap.Insert(10);
heap.Insert(13);
heap.Insert(99);
heap.Insert(100);
heap.Insert(5);
heap.Insert(48);
heap.Insert(109);
heap.Insert(87);
heap.Insert(209)
heap.Insert(1);;

console.log(heap.extractMax());
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);