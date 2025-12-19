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
const arr = nums.slice(1, n + 1);
const operators = nums.slice(n + 1, n + 5);

let maxResult = -1000000000; 
let minResult = 1000000000; 

function backtrack(index, currentValue, add, sub, mul, div) {
  if (index === n) {
    maxResult = Math.max(maxResult, currentValue);
    minResult = Math.min(minResult, currentValue);
    return;
  }

  const nextNum = arr[index];

  if (add > 0) {
    backtrack(index + 1, currentValue + nextNum, add - 1, sub, mul, div);
  }
  
  if (sub > 0) {
    backtrack(index + 1, currentValue - nextNum, add, sub - 1, mul, div);
  }
  
  if (mul > 0) {
    backtrack(index + 1, currentValue * nextNum, add, sub, mul - 1, div);
  }
  
  if (div > 0) {
    let nextValue;
    if (currentValue < 0) {
      nextValue = -Math.floor(Math.abs(currentValue) / nextNum);
    } else {
      nextValue = Math.floor(currentValue / nextNum);
    }
    backtrack(index + 1, nextValue, add, sub, mul, div - 1);
  }
}

backtrack(1, arr[0], operators[0], operators[1], operators[2], operators[3]);

const printMax = maxResult === 0 ? 0 : maxResult;
const printMin = minResult === 0 ? 0 : minResult;

console.log(printMax);
console.log(printMin);