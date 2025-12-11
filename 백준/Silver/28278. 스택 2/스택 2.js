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
const output = [];
for (let i = 0; i < n; i++) {
  const cmd = nums[idx++];
  switch (cmd) {
    case 1: {
      const x = nums[idx++];
      stack.push(x);
      break;
    }
    case 2: {
      if (stack.length === 0) {
        output.push(-1);
      } else {
        output.push(stack.pop());
      }
      break;
    }
    case 3: {
      output.push(stack.length);
      break;
    }
    case 4: {
      output.push(stack.length === 0 ? 1 : 0);
      break;
    }
    case 5: {
      if (stack.length === 0) {
        output.push(-1);
      } else {
        output.push(stack[stack.length - 1]);
      }
      break;
    }
  }
}
console.log(output.join("\n"));