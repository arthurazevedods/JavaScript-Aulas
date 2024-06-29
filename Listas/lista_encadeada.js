class Node {
    constructor(data) {
      this.data = data; // Valor armazenado no nó
      this.next = null; // Ponteiro para o próximo nó
    }
}
  
class LinkedList {
    constructor() {
        this.head = null; // Cabeça da lista (inicia nula)
    }

    // Inserir um novo nó no início da lista
    insertFirst(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Inserir um novo nó após um nó específico
    insertAfter(data, previousNode) {
        if (previousNode === null) {
        this.insertFirst(data);
        return;
        }

        const newNode = new Node(data);
        newNode.next = previousNode.next;
        previousNode.next = newNode;
    }

    // Inserir um novo nó no final da lista
    insertLast(data) {
        let current = this.head;
        if (current === null) {
        this.head = new Node(data);
        return;
        }

        while (current.next !== null) {
        current = current.next;
        }

        current.next = new Node(data);
    }

    // Remover o primeiro nó da lista
    removeFirst() {
        if (this.head === null) {
        return;
        }

        this.head = this.head.next;
    }

    // Remover um nó específico da lista
    removeNode(node) {
        let previous = null;
        let current = this.head;

        while (current !== null) {
        if (current === node) {
            if (previous === null) {
            this.head = current.next;
            } else {
            previous.next = current.next;
            }
            return;
        }

        previous = current;
        current = current.next;
        }
    }

    // Verificar se a lista está vazia
    isEmpty() {
        return this.head === null;
    }

    // Percorrer a lista e imprimir os valores dos nós
    printList() {
        let current = this.head;
        while (current !== null) {
        console.log(current.data);
        current = current.next;
        }
    }
}

const list = new LinkedList();

list.insertFirst(10);
list.insertFirst(20);
list.insertFirst(30);

console.log('Lista:');
list.printList(); // Imprime: 30 20 10

list.removeFirst(); // Remove o nó 30

console.log('\nLista após remover o primeiro nó:');
list.printList(); // Imprime: 20 10

list.insertAfter(40, list.head); // Insere o nó 40 após o nó 20

console.log('\nLista após inserir um nó após o primeiro nó:');
list.printList(); // Imprime: 20 40 10

