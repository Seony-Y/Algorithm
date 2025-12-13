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

const n = nums[0];
const structure = nums.slice(1, n + 1); 
const initialValues = nums.slice(n + 1, 2 * n + 1);
const m = nums[2 * n + 1];
const insertValues = nums.slice(2 * n + 2, 2 * n + 2 + m);

const queue = [];
for (let i = n - 1; i >= 0; i--) {
  if (structure[i] === 0) {
    queue.push(initialValues[i]);
  }
}

const result = [];
let startIdx = 0;

for (let value of insertValues) {
  if (startIdx < queue.length) {
    result.push(queue[startIdx++]);
    queue.push(value); 
  } else {
    result.push(value); 
  }
}

console.log(result.join(" "));