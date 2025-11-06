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

const a = nums[0];
const b = nums[1];
const c = nums[2];

if (a === 60 && b === 60 && c === 60) {
  console.log("Equilateral");
} else if (a + b + c === 180 && (a === b || b === c || a === c)) {
  console.log("Isosceles");
} else if (a + b + c === 180) {
  console.log("Scalene");
} else {
  console.log("Error");
}