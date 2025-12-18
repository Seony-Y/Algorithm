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
const visited = Array(n + 1).fill(false);

function backtrack(depth, start) {
  if (depth === m) {
    console.log(result.join(" "));
    return;
  }

  for (let i = start; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      result.push(i);
      backtrack(depth + 1, i + 1);
      result.pop();
      visited[i] = false;
    }
  }
}

backtrack(0, 1);