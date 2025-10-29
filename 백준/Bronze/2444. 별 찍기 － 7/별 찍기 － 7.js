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

const N = nums[0];
const result = [];

for (let i = 1; i <= N; i++) {
  const empty = " ".repeat(N - i);
  const stars = "*".repeat(i + i - 1);
  result.push(empty + stars);
}

for (let i = N - 1; i >= 1; i--) {
  const empty = " ".repeat(N - i);
  const stars = "*".repeat(i + i - 1);
  result.push(empty + stars);
}

console.log(result.join("\n"));
