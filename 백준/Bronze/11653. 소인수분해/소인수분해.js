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

let n = nums[0];
const result = [];

for (let i = 2; i * i <= n; i++) {
  while (n % i === 0) {
    result.push(i);
    n /= i;
  }
}
if (n > 1) {
  result.push(n);
}

console.log(result.join("\n"));