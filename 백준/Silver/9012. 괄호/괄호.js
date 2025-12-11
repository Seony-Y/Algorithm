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

const inputCount = Number(lines[0]);
const results = [];

for (let i = 1; i <= inputCount; i++) {
  const str = lines[i];
  const stack = [];
  let isVPS = true;

  for (const char of str) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) {
        isVPS = false;
        break;
      }
      stack.pop();
    }
  }

  if (stack.length !== 0) {
    isVPS = false;
  }

  results.push(isVPS ? "YES" : "NO");
}

console.log(results.join("\n"));