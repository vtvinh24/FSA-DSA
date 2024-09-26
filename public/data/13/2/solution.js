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
  
    breadthFirstTraversal() {
      if (!this.root) return [];
      const result = [];
      const queue = [this.root];
  
      while (queue.length > 0) {
        const currentNode = queue.shift();
        result.push(currentNode.data);
  
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
  
      return result;
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
  // Get breadth-first traversal
  let bfsResult = tree.breadthFirstTraversal();
  return bfsResult.join(" → ");
  