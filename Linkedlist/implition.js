// Implementation of LinkedList in Javascript

// The Node class defines a structure with a value to store data and a next pointer initialized to null, representing the next node in the linked list.
// The constructor takes a value parameter to set the node’s data and creates a node with no link to the next node initially.
// Implementation of a linked list
// 1. Creaing a Linked List
// To create a simple linked list in JavaScript, the provided code defines a LinkedList class and a Node class to represent individual elements.




class Node{
    constructor(value)
    {
    this.value=value
    this.next=null
    }
}
class LinkedList{
    constructor()
    {
        this.head=null
    }
    append(value)
    {
        let newnode=new Node(value)
        if(!this.head)
        {
            this.head=newnode
            return
        }
        let current=this.head
        while(current.next)
        {
            current=current.next
        }
        current.next=newnode
        
    }
    printList(){
      let current=this.head
      let result=""
      while(current)
      {
          result+=current.value+'->'
          current=current.next
      }
      console.log(result+'null')
    }
}
let list=new LinkedList()
list.append(10)
list.append(20)
list.append(30)
list.printList()