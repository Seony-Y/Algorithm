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

const n = nums[0];
const arr = nums.slice(1, n + 1);
const sortedUnique = Array.from(new Set(arr)).sort((a, b) => a - b);
const rankMap = new Map();
for (let i = 0; i < sortedUnique.length; i++) {
  rankMap.set(sortedUnique[i], i);
}

let result = "";
for (let i = 0; i < n; i++) {
  result += rankMap.get(arr[i]) + " ";
}
console.log(result.trim());