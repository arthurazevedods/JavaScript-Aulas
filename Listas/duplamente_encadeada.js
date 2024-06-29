class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null; // Cabeça da lista (inicia nula)
        this.tail = null; // Cauda da lista (inicia nula)
    }

    // Inserir um novo nó no início da lista
    insertFirst(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }
    }

    // Inserir um novo nó após um nó específico
    insertAfter(data, previousNode) {
        if (previousNode === null) {
            this.insertFirst(data);
            return;
        }

        const newNode = new Node(data);
        newNode.next = previousNode.next;
        newNode.previous = previousNode;
        previousNode.next = newNode;

        if (newNode.next === null) {
            this.tail = newNode;
        } else {
            newNode.next.previous = newNode;
        }
    }

    // Inserir um novo nó no final da lista
    insertLast(data) {
        this.insertAfter(data, this.tail);
    }

    // Remover o primeiro nó da lista
    removeFirst() {
        if (this.head === null) {
            return;
        }

        const removedNode = this.head;
        this.head = this.head.next;

        if (this.head === null) {
            this.tail = null;
        } else {
            this.head.previous = null;
        }

        removedNode.next = removedNode.previous = null;
        return removedNode.data;
    }

    // Remover o último nó da lista
    removeLast() {
        if (this.tail === null) {
            return;
        }

        const removedNode = this.tail;
        this.tail = this.tail.previous;

        if (this.tail === null) {
            this.head = null;
        } else {
            this.tail.next = null;
        }

        removedNode.next = removedNode.previous = null;
        return removedNode.data;
    }

    // Remover um nó específico da lista
    removeNode(node) {
        if (node === null || node === this.head || node === this.tail) {
            if (node === this.head) {
                this.removeFirst();
            } else if (node === this.tail) {
                this.removeLast();
            }
            return;
        }

        node.previous.next = node.next;
        node.next.previous = node.previous;

        node.next = node.previous = null;
    }

    // Verificar se a lista está vazia
    isEmpty() {
        return this.head === null;
    }

    // Percorrer a lista e imprimir os valores dos nós (na direção cabeça-cauda)
    printListForward() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Percorrer a lista e imprimir os valores dos nós (na direção cauda-cabeça)
    printListBackward() {
        let current = this.tail;
        while (current !== null) {
            console.log(current.data);
            current = current.previous;
        }
    }
}

const list = new DoublyLinkedList();

list.insertFirst(10);
list.insertFirst(20);
list.insertFirst(30);

console.log('Lista:');
list.printListForward(); 

list.removeFirst(); 

console.log('\n');
list.printListForward(); 

list.insertAfter(40, list.head); // Insere o nó 40 após o nó 20

console.log('\n');
list.printListBackward(); 
