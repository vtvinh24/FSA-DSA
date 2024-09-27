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

  insert(data) {
    const insertNode = (node, data) => {
      if (!node) return new Node(data);
      if (data < node.data) node.left = insertNode(node.left, data);
      else node.right = insertNode(node.right, data);
      return node;
    };
    this.root = insertNode(this.root, data);
  }

  findLCA(node, n1, n2) {
    // Base case
    if (!node) return null;

    // If both n1 and n2 are smaller than node, LCA lies in left subtree
    if (n1 < node.data && n2 < node.data) {
      return this.findLCA(node.left, n1, n2);
    }

    // If both n1 and n2 are greater than node, LCA lies in right subtree
    if (n1 > node.data && n2 > node.data) {
      return this.findLCA(node.right, n1, n2);
    }

    // If we reach here, then one key is on one side and the other is on the other side
    return node; // This node is the LCA
  }
}

// Usage
let line = 0;
let tree = new Tree();
let n = parseInt(args[line++]);

for (let i = 0; i < n; i++) {
  let m = parseInt(args[line++]);
  tree.insert(m);
}

// Input 2 nodes
let n1 = parseInt(args[line++]);
let n2 = parseInt(args[line++]);

// Find smallest common ancestor
return tree.findLCA(tree.root, n1, n2).data;