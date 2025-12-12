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

const [N, K] = nums;
const deque = [];
for (let i = 1; i <= N; i++) {
  deque.push(i);
}

const result = [];
while (deque.length) {
  for (let i = 1; i < K; i++) {
    const front = deque.shift();
    deque.push(front);
  }
  const removed = deque.shift();
  result.push(removed);
}

console.log(`<${result.join(", ")}>`);