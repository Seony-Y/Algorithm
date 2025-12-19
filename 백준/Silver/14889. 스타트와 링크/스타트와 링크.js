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
const S = [];
let index = 1;
for (let i = 0; i < n; i++) {
  S.push(nums.slice(index, index + n));
  index += n;
}

let minDiff = Infinity;
const visited = Array(n).fill(false);

function backtrack(depth, startCount) {
  if (startCount > n / 2) return;
  if (depth === n) {
    if (startCount === n / 2) {
      let startSum = 0;
      let linkSum = 0;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (visited[i] && visited[j]) {
            startSum += S[i][j];
          } else if (!visited[i] && !visited[j]) {
            linkSum += S[i][j];
          }
        }
      }
      const diff = Math.abs(startSum - linkSum);
      minDiff = Math.min(minDiff, diff);
    }
    return;
  }

  // Include in start team
  visited[depth] = true;
  backtrack(depth + 1, startCount + 1);
  
  // Include in link team
  visited[depth] = false;
  backtrack(depth + 1, startCount);
}

backtrack(0, 0);
console.log(minDiff); 