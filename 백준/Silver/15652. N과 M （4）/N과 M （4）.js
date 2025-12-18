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

function backtrack(depth, start) {
  if (depth === m) {
    console.log(result.join(" "));
    return;
  }

  for (let i = start; i <= n; i++) {
    result.push(i);
    backtrack(depth + 1, i);
    result.pop();
  }
}

backtrack(0, 1);