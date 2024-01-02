class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (currentNode.value > newNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }
  traverseInOrder(node, list) {
    if (node.left) {
      console.log("this.traverseInOrder(node.left, list)");
      this.traverseInOrder(node.left, list);
    }
    console.log("list.push(node.value)");
    list.push(node.value);
    if (node.right) {
      console.log("this.traverseInOrder(node.right, list);");
      this.traverseInOrder(node.right, list);
    }
    console.log("return list;");
    return list;
  }
  traversePreOrder(node, list) {
    list.push(node.value);
    if (node.left) {
      this.traversePreOrder(node.left, list);
    }
    if (node.right) {
      this.traversePreOrder(node.right, list);
    }
    return list;
  }
  traversePostOrder(node, list) {
    if (node.left) {
      this.traversePostOrder(node.left, list);
    }
    if (node.right) {
      this.traversePostOrder(node.right, list);
    }
    list.push(node.value);
    return list;
  }
}

const myBinarySearch = new BinarySearchTree();
myBinarySearch.insert(9);
myBinarySearch.insert(20);
myBinarySearch.insert(4);
// myBinarySearch.insert(1);
// myBinarySearch.insert(-1);
// myBinarySearch.insert(15);
// myBinarySearch.insert(6);
// myBinarySearch.insert(170);
// myBinarySearch.insert(180);
// myBinarySearch.insert(2000);

// console.log(traverse(myBinarySearch.root));
console.log(myBinarySearch.traverseInOrder(myBinarySearch.root, []));
console.log(myBinarySearch.traversePreOrder(myBinarySearch.root, []));
console.log(myBinarySearch.traversePostOrder(myBinarySearch.root, []));
