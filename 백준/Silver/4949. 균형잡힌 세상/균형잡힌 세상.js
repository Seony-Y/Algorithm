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

const results = [];

for (let i = 0; i < lines.length; i++) {
  const str = lines[i];
  if (str === ".") break;

  const stack = [];
  let isBalanced = true;

  for (const char of str) {
    if (char === "(" || char === "[") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0 || stack[stack.length - 1] !== "(") {
        isBalanced = false;
        break;
      }
      stack.pop();
    } else if (char === "]") {
      if (stack.length === 0 || stack[stack.length - 1] !== "[") {
        isBalanced = false;
        break;
      }
      stack.pop();
    }
  }

  if (stack.length !== 0) {
    isBalanced = false;
  }

  results.push(isBalanced ? "yes" : "no");
}

console.log(results.join("\n"));