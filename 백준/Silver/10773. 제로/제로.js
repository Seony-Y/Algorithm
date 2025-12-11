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
const stack = [];
let idx = 1;
for (let i = 0; i < n; i++) {
  const x = nums[idx++];
  if (x === 0) {
    stack.pop();
  } else {
    stack.push(x);
  }
}
const result = stack.reduce((acc, cur) => acc + cur, 0);
console.log(result);