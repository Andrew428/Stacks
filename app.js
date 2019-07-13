/* Stack */
import  Stack from './util/Stack.js';

window.onload = () => {
  
  const myStack = new Stack();
    myStack.push(1);
    myStack.push(2);
    console.log(myStack.peek());
    console.log(myStack.pop());
    console.log(myStack.peek());
    myStack.push("freeCodeCamp");
    console.log(myStack.size());
    console.log(myStack.peek());
    console.log(myStack.pop());
    console.log(myStack.peek());
};