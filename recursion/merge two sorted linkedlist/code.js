class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = null;
    this.tail = null;
  }
  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      return this;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      return this;
    }
  }
  print() {
    let current = this.head;
    const array = [];
    while (current) {
      array.push(current.val);
      current = current.next;
    }
    console.log(array);
    return this;
  }
}

// merge two sorted linked list

mergeSortedLinkedList = (A, B) => {
  if (A === null) {
    return B;
  }
  if (B === null) {
    return A;
  }
  if (A.val < B.val) {
    A.next = mergeSortedLinkedList(A.next, B);
    return A;
  } else {
    B.next = mergeSortedLinkedList(A, B.next);
    return B;
  }
};

function print(head) {
  let current = head;
  const array = [];
  while (current) {
    array.push(current.val);
    current = current.next;
  }
  console.log(array);
  return this;
}

const linkListA = new LinkedList();
const linkListB = new LinkedList();

linkListA.add(1);
linkListA.add(3);
linkListA.add(5);
linkListA.add(7);
linkListA.add(9);

linkListB.add(2);
linkListB.add(4);
linkListB.add(6);
linkListB.add(8);
linkListB.add(10);

const newLinkedList = mergeSortedLinkedList(linkListA.head, linkListB.head);
print(newLinkedList);
