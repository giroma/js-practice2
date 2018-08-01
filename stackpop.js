stack1 = [1,2,3,4,5]
stack2 = []
class Stack{
  static push(num){
    stack1.push(num)
  }
  static pop(){
    let size = this.peek()
    for (let i = 1; i < size; i++) {
      stack2.push(stack1.pop())
    }
    stack1.pop()
    for (let i = 0; i < size-1; i++) {
      stack1.push(stack2.pop())
    }
    console.log('final', stack1);
    console.log('final', stack2);
  }
  static peek(){
  return stack1.length + stack2.length
  }

}

// Stack.peek()
Stack.push(99)
Stack.pop()
Stack.pop()
// Stack.peek()
