class DoublyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Method to append a new node at the end of the list
  append(data) {
    const newNode = new DoublyLinkedListNode(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  // Method to reverse the doubly linked list
  reverse() {
    let current = this.head;
    let temp = null;

    // Swap next and prev for each node
    while (current) {
      // Swap the next and prev pointers
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;

      // Move to the next node (in original order, which is now previous)
      current = current.prev;
    }

    // After the loop, temp will be on the last processed node
    if (temp) {
      this.head = temp.prev; // Update head to be the last processed node
    }
  }

  toArray() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.data);
      current = current.next;
    }
    console.log(values);
    return values;
  }
}

const list = new DoublyLinkedList();

// console.log("Original List:");
// list.print();
let n = Number(args[0].split(" ")[0]);
for (let i = 0; i < n; i++) {
  list.append(Number(args[i]));
}

list.reverse();
let result = list.toArray().join(" ");
return result;
