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

for (let i = 0; i < nums.length; i += 3) {
  const a = nums[i];
  const b = nums[i + 1];
  const c = nums[i + 2];

  if (a === 0 && b === 0 && c === 0) {
    break;
  }

  if (a + b > c && b + c > a && c + a > b) {
    if (a === b && b === c) {
      console.log("Equilateral");
    } else if (a === b || b === c || a === c) {
      console.log("Isosceles");
    } else {
      console.log("Scalene");
    }
  } else {
    console.log("Invalid");
  }
} 