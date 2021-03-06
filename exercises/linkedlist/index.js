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
    if (!this.head) {
      return null;
    }
    let pointer = this.head;
    while (pointer) {
      if (!pointer.next) {
        return pointer;
      }
      pointer = pointer.next;
    }
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let pointer = this.head.next;

    while (pointer.next) {
      prev = pointer;
      pointer = pointer.next;
    }
    prev.next = null;
  }
  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }
  getAt(index) {
    let count = 0;
    let pointer = this.head;

    while (pointer) {
      if (count === index) {
        return pointer;
      }
      count++;
      pointer = pointer.next;
    }
    return null;
  }
  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }
  forEach(fn) {
    let pointer = this.head;
    while (pointer) {
      fn(pointer);
      pointer = pointer.next;
    }
  }
  
  *[Symbol.iterator]() {   // generator
      let pointer = this.head
      while (pointer) {
          yield pointer
          pointer = pointer.next
      }
  }
}

module.exports = { Node, LinkedList };
