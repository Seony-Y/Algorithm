const fs = require("fs");
const path = require("path");

const src =
  process.platform === "linux"
    ? 0
    : process.env.LOCAL_INPUT || path.join(__dirname, "input.txt");
const raw = fs.readFileSync(src, "utf8").replace(/\r/g, "").trim();

const lines = raw.split("\n"); // 줄 단위가 필요할 때
const tokens = raw.split(/\s+/); // 공백 단위가 필요할 때
const nums = tokens.map(Number); // 전부 숫자면 이 한 줄로도 OK

nums.sort((a, b) => a - b);
const sum = nums.reduce((a, b) => a + b, 0);
const avg = Math.round(sum / nums.length);
const mid = nums[Math.floor(nums.length / 2)];

console.log(avg);
console.log(mid);