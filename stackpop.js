class Queue{
  constructor() {
     this.stack1 = [1,2,3,4,5]
     this.stack2 = []
  }
  push(num){
    this.stack1.push(num)
  }
  pop(){
    let size = this.peek()
    for (let i = 0; i < size-1; i++) {
      this.stack2.push(this.stack1.pop())
    }
    this.stack1.pop()
    for (let i = 0; i < size-1; i++) {
      this.stack1.push(this.stack2.pop())
    }
    console.log('final', this.stack1);
    console.log('final', this.stack2);
  }
  peek(){
  return this.stack1.length + this.stack2.length
  }
}

let stack = new Queue
stack.push(99)
stack.pop()
stack.pop()
stack.push(88)
stack.pop()
// Stack.peek()
