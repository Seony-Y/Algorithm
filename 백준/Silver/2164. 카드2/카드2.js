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
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) return null;
    const removedValue = this.head.value;
    this.head = this.head.next;
    this.size--;
    if (this.size === 0) {
      this.tail = null;
    }
    return removedValue;
  }

  getSize() {
    return this.size;
  }
}

const queue = new Queue();
for (let i = 1; i <= N; i++) {
  queue.enqueue(i);
}

while (queue.getSize() > 1) {
  queue.dequeue(); 
  const card = queue.dequeue(); 
  queue.enqueue(card); 
}

console.log(queue.dequeue()); 


