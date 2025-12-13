const fs = require("fs");
const path = require("path");

const src =
  process.platform === "linux"
    ? 0
    : process.env.LOCAL_INPUT || path.join(__dirname, "input.txt");
const raw = fs.readFileSync(src, "utf8").replace(/\r/g, "").trim();

const lines = raw.split("\n"); 
const tokens = raw.split(/\s+/);
const nums = tokens.map(Number);

const N = nums[0];
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  pushFront(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  pushBack(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  popFront() {
    if (this.size === 0) return -1;
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    this.size--;
    if (this.size === 0) this.tail = null;
    return value;
  }

  popBack() {
    if (this.size === 0) return -1;
    const value = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    this.size--;
    if (this.size === 0) this.head = null;
    return value;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0 ? 1 : 0;
  }

  getFront() {
    return this.size === 0 ? -1 : this.head.value;
  }

  getBack() {
    return this.size === 0 ? -1 : this.tail.value;
  }
}

const deque = new Deque();
const result = [];
let idx = 1;

for (let i = 0; i < N; i++) {
  const command = nums[idx++];
  switch (command) {
    case 1: { 
      const value = nums[idx++];
      deque.pushFront(value);
      break;
    }
    case 2: { 
      const value = nums[idx++];
      deque.pushBack(value);
      break;
    }
    case 3: { 
      result.push(deque.popFront());
      break;
    }
    case 4: { 
      result.push(deque.popBack());
      break;
    }
    case 5: {
      result.push(deque.getSize());
      break;
    }
    case 6: {
      result.push(deque.isEmpty());
      break;
    }
    case 7: { 
      result.push(deque.getFront());
      break;
    }
    case 8: { 
      result.push(deque.getBack());
      break;
    }
  }
}

console.log(result.join("\n"));