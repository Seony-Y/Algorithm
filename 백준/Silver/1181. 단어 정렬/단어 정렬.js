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
const words = [];
for (let i = 0; i < n; i++) {
  words.push(lines[i + 1]);
}

words.sort((a, b) => {
  if (a.length === b.length) {
    return a < b ? -1 : 1;
  }
  return a.length - b.length;
});

let result = "";
let prev = "";
for (let i = 0; i < n; i++) {
  if (words[i] !== prev) {
    result += words[i] + "\n";
    prev = words[i];
  }
}
console.log(result.trim());