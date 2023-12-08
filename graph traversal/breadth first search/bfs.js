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
    this.length = 0;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let curr = this.root;
    while (true) {
      if (curr.value > newNode.value) {
        if (!curr.left) {
          curr.left = newNode;
          return this;
        }
        curr = curr.left;
      } else {
        if (!curr.right) {
          curr.right = newNode;
          return this;
        }
        curr = curr.right;
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
  breadthFirstSearchR(queue, list) {
    if (queue.length === 0) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    return this.breadthFirstSearchR(queue, list);
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

//             9
//        4        20
//      1   6    15   170
//   -1                  180

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
console.log(myBinarySearch.breadthFirstSearchR([myBinarySearch.root], []));
