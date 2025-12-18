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
const m = nums[1];

const result = [];
const output = [];

function backtrack(depth) {
  if (depth === m) {
    output.push(result.join(" "));
    return;
  }

  for (let i = 1; i <= n; i++) {
    result.push(i);
    backtrack(depth + 1);
    result.pop();
  }
}

backtrack(0);
console.log(output.join("\n"));  