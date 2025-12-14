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

const T = nums[0];
let index = 1;
const results = [];

for (let t = 0; t < T; t++) {
  const N = nums[index++];
  const M = nums[index++];
  
  function combination(n, r) {
    if (r > n) return 0;
    if (r === 0 || r === n) return 1;
    r = Math.min(r, n - r);
    let numerator = 1;
    let denominator = 1;
    for (let i = 0; i < r; i++) {
      numerator *= (n - i);
      denominator *= (i + 1);
    }
    return numerator / denominator;
  }
  
  const ways = combination(M, N);
  results.push(ways);
}

console.log(results.join("\n"));