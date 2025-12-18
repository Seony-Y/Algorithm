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

const k = nums[0];
const result = [];
let moveCount = 0;

function hanoi(n, from, to, via) {
  if (n === 1) {
    result.push(`${from} ${to}`);
    moveCount++;
    return;
  }
  hanoi(n - 1, from, via, to);
  result.push(`${from} ${to}`);
  moveCount++;
  hanoi(n - 1, via, to, from);
}

hanoi(k, 1, 3, 2);
console.log(moveCount);
console.log(result.join("\n"));
