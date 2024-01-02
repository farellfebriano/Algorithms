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
  recursivelyReverse(head) {
    if (!head || !head.next) {
      this.head = head;
      return head;
    }
    // so basicall p is the new head
    const p = this.recursivelyReverse(head.next);
    head.next.next = head;
    head.next = null;
    return p;
  }
  reverse() {
    let curr = this.head;
    let prev = null;
    while (curr) {
      const temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    this.head = prev;
    return this;
  }
}

const myLinkedList = new LinkedList();
myLinkedList.add(1);
myLinkedList.add(2);
myLinkedList.add(3);
myLinkedList.add(4);
myLinkedList.add(5);
myLinkedList.add(6);
myLinkedList.recursivelyReverse(myLinkedList.head);
myLinkedList.print();
