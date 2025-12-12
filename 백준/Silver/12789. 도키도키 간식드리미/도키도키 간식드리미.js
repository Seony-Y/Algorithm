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
const queue = nums.slice(1);

const stack = [];
let current = 1;
let index = 0;
let isPossible = true;

while (index < N) {
  if (queue[index] === current) {
    current++;
    index++;
  } else if (stack.length > 0 && stack[stack.length - 1] === current) {
    stack.pop();
    current++;
  } else {
    stack.push(queue[index]);
    index++;
  }
}

while (stack.length > 0) {
  if (stack.pop() !== current) {
    isPossible = false;
    break;
  }
  current++;
}

console.log(isPossible ? "Nice" : "Sad");