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

const str = lines[0];

const map = new Map();
for (const s of str) {
  const upper = s.toUpperCase();
  map.set(upper, (map.get(upper) || 0) + 1);
}

let maxCount = 0;
let result = "?";
for (const [key, count] of map) {
  if (count > maxCount) {
    maxCount = count;
    result = key;
  } else if (count === maxCount) {
    result = "?";
  }
}

console.log(result);