class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.head = null;                    //primeiro (cabeça)
      this.tail = null                     //último (cauda)
    }
  
    insertFirst(data) {
      const newNode = new Node(data);
        
      //verifica se a lista tá vazia
      if (this.head === null) { 
        this.head = newNode;                //head recebe newNode
        this.tail = newNode;                //tail recebe newNode
        newNode.next = this.head;           //newNode aponta para ele mesmo (head)
      } else {
        newNode.next = this.head;           //o newnode aponta para o antigo head
        this.tail.next = newNode            //O último aponta para newNode
        this.head = newNode;                //head agora é newnode
      }
  
    }
  
    insertLast(data) {
      const newNode = new Node(data);
  
      if (this.head === null) {
        this.head = newNode;              
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode
      }
      newNode.next = this.head;        //newNode aponta para this.head
    }
  }
  