stack1 = []
stack2 = []
class Stack{
  constructor(){

  }
  static push(num){
    stack1.push(num)
  }
  static pop(){
    let next = stack1[0]
    stack1.shift()
    stack2.push(next)
  }
  static peek(){
  console.log('stack1:', stack1)
  console.log('stack2:', stack2)
  }

}
Stack.push(1)
Stack.push(2)
Stack.push(3)
Stack.peek()
Stack.push(7)
Stack.peek()
Stack.pop()
Stack.peek()
