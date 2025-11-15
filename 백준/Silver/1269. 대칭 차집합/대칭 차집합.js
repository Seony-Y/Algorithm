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

const [n, m] = nums;
const a = new Set(nums.slice(2, 2 + n));
const b = new Set(nums.slice(2 + n, 2 + n + m));

let count = 0;
for (const x of a) {
  if (!b.has(x)) count++;
}
for (const x of b) {
  if (!a.has(x)) count++;
}

console.log(count);