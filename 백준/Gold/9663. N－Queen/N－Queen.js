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

let count = 0;
const cols = Array(n).fill(false);
const diag1 = Array(2 * n - 1).fill(false); 
const diag2 = Array(2 * n - 1).fill(false); 

function backtrack(row) {
  if (row === n) {
    count++;
    return;
  }

  for (let col = 0; col < n; col++) {
    if (cols[col] || diag1[row + col] || diag2[row - col + n - 1]) {
      continue;
    }

    cols[col] = true;
    diag1[row + col] = true;
    diag2[row - col + n - 1] = true;

    backtrack(row + 1);

    cols[col] = false;
    diag1[row + col] = false;
    diag2[row - col + n - 1] = false;
  }
}

backtrack(0);
console.log(count);