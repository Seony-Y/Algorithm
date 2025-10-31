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

let max = -1;
let x = -1;
let y = -1;

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    const num = nums[i * 9 + j];
    if (num > max) {
      max = num;
      x = i + 1;
      y = j + 1;
    }
  }
}

console.log(max);
console.log(x, y);