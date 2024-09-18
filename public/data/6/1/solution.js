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
  let fList = new SinglyLinkedList();
  let sList = new SinglyLinkedList();

  // Process the first list
  const fLength = args[currentLine++]; // Number of nodes in the first list
  for (let j1 = 0; j1 < fLength; j1++) {
    const tmpNodeData = args[currentLine++];
    fList.insertNode(tmpNodeData);
  }

  // Process the second list
  const sLength = args[currentLine++]; // Number of nodes in the second list
  for (let j2 = 0; j2 < sLength; j2++) {
    const tmpNodeData = args[currentLine++];
    sList.insertNode(tmpNodeData);
  }

  // Merge the two lists
  let f = fList.head;
  let s = sList.head;
  let mergedList = new SinglyLinkedList();

  // Merging process
  while (f != null && s != null) {
    if (f.data < s.data) {
      mergedList.insertNode(f.data);
      f = f.next;
    } else {
      mergedList.insertNode(s.data);
      s = s.next;
    }
  }

  // Append the remaining nodes from f or s
  if (f != null) {
    mergedList.tail.next = f;
  } else if (s != null) {
    mergedList.tail.next = s;
  }

  // Build the result string
  let strMerged = "";
  let tmpNode = mergedList.head;
  while (tmpNode != null) {
    strMerged += " " + tmpNode.data;
    tmpNode = tmpNode.next;
  }

  result += strMerged.trim() + "\n";
}

return result.trim();
