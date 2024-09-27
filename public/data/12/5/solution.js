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

function swapNodesInPairs(linkedList) {
  let current = linkedList.head;

  while (current != null && current.next != null) {
    // Swap the data of the current node and the next node
    let temp = current.data;
    current.data = current.next.data;
    current.next.data = temp;

    // Move to the next pair
    current = current.next.next;
  }

  // Store the result in a variable
  let result = [];
  current = linkedList.head;
  while (current != null) {
    result.push(current.data);
    current = current.next;
  }

  // Return the result
  return result;
}

let input = args[0].split(" ").map(Number);

let list = new SinglyLinkedList();
for (let i = 0; i < input.length; i++) {
  list.insertNode(input[i]);
}

let result = swapNodesInPairs(list);

return result.join(" ");
