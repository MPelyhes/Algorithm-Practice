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

console.log(heap);