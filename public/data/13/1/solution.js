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

  height(node = this.root) {
    if (!node) return -1;
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }
}

let line = 0;
let tree = new Tree();
let n = parseInt(args[line++]);

for (let i = 0; i < n; i++) {
  let m = parseInt(args[line++]);
  tree.insert(m);
}

return tree.height();
