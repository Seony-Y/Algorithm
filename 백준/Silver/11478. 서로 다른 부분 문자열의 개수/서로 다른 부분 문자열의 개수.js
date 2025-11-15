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

const s = lines[0];
const substrings = new Set();

for (let length = 1; length <= s.length; length++) {
  for (let start = 0; start <= s.length - length; start++) {
    const substring = s.slice(start, start + length);
    substrings.add(substring);
  }
}

console.log(substrings.size);1