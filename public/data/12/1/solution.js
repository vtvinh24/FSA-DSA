class SinglyLinkedListNode {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData);

    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  // = pop()
  removeTail() {
    if (!this.head) return null;

    let currentNode = this.head;
    if (currentNode === this.tail) {
      const data = currentNode.data;
      this.head = this.tail = null; 
      return data;
    }

    // Find (length - 1)th node
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }

    const data = this.tail.data;
    this.tail = currentNode;
    this.tail.next = null;
    return data;
  }

  print() {
    let node = this.head;
    let buffer = [];
    while (node) {
      buffer.push(node.data);
      node = node.next;
    }
    return buffer.join(" ");
  }
}

let line = 0;
let result = "";

// Test cases
let t = Number(args[line++]);
for (let i = 0; i < t; i++) {
  // Lists
  let n = Number(args[line++]);
  let list = new SinglyLinkedList();

  // Get input
  for (let j = 0; j < n; j++) {
    list.insertNode(Number(args[line++]));
  }

  let tmpList = new SinglyLinkedList();

  // Build the temporary list
  while (list.tail) {
    tmpList.insertNode(list.removeTail());
  }


  result += tmpList.print() + "\n";
}

return result.trim();
