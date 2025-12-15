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
const arr = nums.slice(1).sort((a, b) => a - b);

// 산술평균
const mean = Math.round(arr.reduce((sum, val) => sum + val, 0) / n) || 0;

// 중앙값
const median = arr[Math.floor(n / 2)];

// 최빈값
const frequency = new Map();
for (let num of arr) {
  frequency.set(num, (frequency.get(num) || 0) + 1);
}
const maxFreq = Math.max(...frequency.values());
const modeCandidates = [];
for (let [num, freq] of frequency.entries()) {
  if (freq === maxFreq) {
    modeCandidates.push(num);
  }
}
modeCandidates.sort((a, b) => a - b);
const mode = modeCandidates.length > 1 ? modeCandidates[1] : modeCandidates[0];

// 범위
const range = arr[n - 1] - arr[0];

console.log(mean);
console.log(median);
console.log(mode);
console.log(range);