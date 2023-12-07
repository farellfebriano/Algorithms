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
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);
    while (queue.length > 0) {
      // this will delete the first node from the list
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }
}

const myBinarySearch = new BinarySearchTree();
myBinarySearch.insert(9);
myBinarySearch.insert(20);
myBinarySearch.insert(4);
myBinarySearch.insert(1);
myBinarySearch.insert(-1);
myBinarySearch.insert(15);
myBinarySearch.insert(6);
myBinarySearch.insert(170);
myBinarySearch.insert(180);
myBinarySearch.insert(2000);

// console.log(traverse(myBinarySearch.root));
console.log(myBinarySearch.breadthFirstSearch());
