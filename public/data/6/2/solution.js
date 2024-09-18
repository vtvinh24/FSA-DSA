const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
};

// Get input
const tc = args[0]; // Number of test cases
let currentLine = 1;
let result = "";

// Loop through each test case
for (let t = 0; t < tc; t++) {
  let size = args[currentLine++];
  // Init linked list
  let list = new SinglyLinkedList();
  for (let i = 0; i < size; i++) {
    list.insertNode(args[currentLine++]);
  }

  let node = list.head;
  while (node != null) {
    if (node.next != null) {
      if (node.next.data == node.data) {
        node.next = node.next.next;
        // however, current node can be the same as the next next node, so "continue" is used to re-check the current node
        continue;
      }
    }
    node = node.next;
  }

  let tmp = list.head;
  let strList = "";
  while (tmp != null) {
    strList += tmp.data + " ";
    tmp = tmp.next;
  }
  result += strList.trim() + "\n";
}

return result.trim();
