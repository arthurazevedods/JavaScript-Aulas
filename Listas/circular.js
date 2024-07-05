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
      newNode.next = newNode;             //newNode aponta para ele mesmo (head)
      this.head = newNode;                //head recebe newNode
      this.tail = newNode;                //tail recebe newNode
    } else {
      newNode.next = this.head;           //o newnode aponta para o antigo head
      this.tail.next = newNode;            //O último aponta para newNode
      this.head = newNode;                //head agora é newnode
    }

  }

  insertLast(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode;
    } else {
      this.tail.next = newNode;
      newNode.next = this.head;
      this.tail = newNode;
    }
  }

  removeFirst() {
    if (this.head === null) {
      return;
    } else if (this.head.next === this.head) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.next = this.head.next
      this.head = this.head.next;
    }
  }
  removeLast(){
    if(this.tail === null){
      return;
    }else if(this.tail.next === this.tail){
      this.head = null;
      this.tail = null;
    }else{
      let current = this.head;
      let prev = null;
      while (current.next != this.head){
        if(current.next === this.tail){
          prev = current;
        }
        current = current.next
      }
      if(prev){
        prev.next = this.head;
        this.tail = prev;
      }
    }
  }
  removeNode(rmNode) {
    if (this.head === null) {
      console.log("A lista está vazia!");
      return;
    }
  
    while (this.head.data === rmNode) {
      this.removeFirst();
      return;
    }
    prev = current;
    current = current.next;
    while (current !== this.head) {
      if (current.data === rmNode) {
        prev.next = current.next;
        // Removendo o tail
        if (current === this.tail) {
          this.tail = prev;
        }
        return;
      }
      prev = current;
      current = current.next;
    }

    console.log("A lista está vazia")
  }


  printList() {
    console.log('***');
    console.log('Lista:')
    let current = this.head;
    if (this.head != null) {
      do {
        console.log(current.data)
        current = current.next;
      } while (current != this.head);
    } else {
      console.log("VAZIA")
    }
    console.log("***\n")
  }

}

const lista = new CircularLinkedList();
lista.insertFirst(12);
lista.insertFirst(13);
lista.insertLast(16);
lista.printList()//13 12 16
lista.removeFirst();
lista.printList();//12 16
lista.removeLast();
lista.printList();//12
lista.removeNode(12);

lista.insertFirst(22);
lista.insertFirst(35);
lista.insertLast(100);
lista.insertFirst(100);
lista.printList();//100 35 22 100
lista.removeNode(100);
lista.printList();//35 22 100
lista.removeLast();
lista.printList();// 35 22
lista.removeLast();
lista.removeLast();
lista.printList();