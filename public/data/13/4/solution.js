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

  // Method to find all root-to-leaf paths
  findPaths() {
    const paths = [];

    const dfs = (node, currentPath) => {
      if (!node) return;

      currentPath.push(node.data); // Add current node to the path

      // If it's a leaf node, add the path to the result
      if (!node.left && !node.right) {
        // Store a copy of the current path
        paths.push([...currentPath]);
      } else {
        // Continue to explore left and right children
        dfs(node.left, currentPath);
        dfs(node.right, currentPath);
      }

      // Remove the current node to backtrack
      currentPath.pop();
    };

    dfs(this.root, []);
    return paths;
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

// Get all root-to-leaf paths
let allPaths = tree.findPaths();
let result = "";
for (let path of allPaths) {
  result += path.join("->") + "\n";
}

return result.trim();
