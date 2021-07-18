// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    const node = new Node(data, this.head);
    node.next = this.head;
    this.head = node;
    // this.head = new Node(data, this.head
  }
  size() {
    let pointer = this.head;
    let count = 0;
    while (pointer) {
      pointer = pointer.next;
      count++;
    }
    return count;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let pointer = this.head;
    while (pointer.next) {
      pointer = pointer.next;
    }

    return pointer;
  }
  clear() {
     this.head = null
  }
  removeFirst() {
      this.head = this.head.next
  }
}

module.exports = { Node, LinkedList };
