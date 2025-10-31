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

const arr = [];
for (let i = 0; i < 5; i++) {
  arr.push(lines[i].split(""));
}

let result = "";
for (let col = 0; col < 15; col++) {
  for (let row = 0; row < 5; row++) {
    if (arr[row][col]) {
      result += arr[row][col];
    }
  }
}

console.log(result);