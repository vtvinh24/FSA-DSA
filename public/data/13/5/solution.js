class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  // Build the BST from an array representation
  buildTree(values) {
    if (!values.length) return null;
    const createNode = (index) => {
      if (index >= values.length || values[index] === null) return null;
      const node = new Node(values[index]);
      node.left = createNode(2 * index + 1);
      node.right = createNode(2 * index + 2);
      return node;
    };
    this.root = createNode(0);
  }

  recoverTree() {
    let first = null,
      second = null,
      prev = null;

    const inorder = (node) => {
      if (!node) return;

      // Traverse left subtree
      inorder(node.left); 

      // Check for swapped nodes
      if (prev && node.data < prev.data) {
        // Current node is a candidate for the second swapped node
        second = node; 
        if (!first) {
          // Previous node is the first swapped node
          first = prev; 
        }
      }
      // Update the previous node to the current
      prev = node; 

      // Traverse right subtree
      inorder(node.right); 
    };

    // Start in-order traversal
    inorder(this.root); 

    // Swap values of the first and second nodes found
    if (first && second) {
      [first.data, second.data] = [second.data, first.data];
    }
  }

  toArray() {
    const result = [];
    const queue = [this.root];

    while (queue.length) {
      const node = queue.shift();
      if (node) {
        result.push(node.data);
        queue.push(node.left);
        queue.push(node.right);
      } else {
        // Push null for missing nodes
        result.push(null);
      }
    }

    // Remove trailing nulls
    while (result[result.length - 1] === null) {
      result.pop();
    }

    return result;
  }
}

// Usage
let tree = new Tree();
// Example input
// let nodes = [3, 1, 4, null, null, 2];
// Actual input
let line = 0;
let n = Number(args[line++]);
let nodes = [];
for (let i = 0; i < n; i++) {
  let tmp = args[line++];
  if (!tmp || tmp === "" || tmp === "null") {
    nodes.push(null);
  } else {
    nodes.push(Number(tmp));
  }
}

// Build the tree from the array
tree.buildTree(nodes);
// console.log(tree.toArray());

// Recover the BST
tree.recoverTree();
return tree.toArray();
