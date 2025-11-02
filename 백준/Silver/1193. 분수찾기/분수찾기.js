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

let line = 1;
let count = 1;

while (n > count) {
  line++;
  count += line;
}

const indexInLine = n - (count - line); 

let numerator, denominator;

if (line % 2 === 0) {
  // 짝수 줄
  numerator = indexInLine;
  denominator = line - indexInLine + 1;
} else {
  // 홀수 줄
  numerator = line - indexInLine + 1;
  denominator = indexInLine;
}

console.log(`${numerator}/${denominator}`);