# Stacks
Its LIFO way of arranging elements. First items that is in last out.
most programing languages are modeled with stack model in mind

You can think about real stack of cartoon boxes arranges one over the other
its comes with pop, push and peek

You can build stacks with arrays or linked list

Push  O(1)
Peek O(1)
Pop O(1)
look up O(n)

## with LinkedList
```
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value){
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop(){
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
  //isEmpty
}

const myStack = new Stack();
myStack.peek();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();

```
## With Arrays
```

class Stack {
  constructor(){
    this.stackArray =[]
  }
  peek() {
   return this.stackArray[this.stackArray.length-1]
   
  }
  push(value){
    this.stackArray.push(value)
    return this
  }
  pop(){
    this.stackArray.pop()
    return this
  }
  //isEmpty
}

const myStack = new Stack();
myStack.peek();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
console.log(myStack.stackArray)
myStack.peek();
```