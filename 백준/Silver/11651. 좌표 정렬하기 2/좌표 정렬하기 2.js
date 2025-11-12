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
const points = [];
for (let i = 0; i < n; i++) {
  const x = nums[2 * i + 1];
  const y = nums[2 * i + 2];
  points.push([x, y]);
}

points.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

let result = "";
for (let i = 0; i < n; i++) {
  result += points[i][0] + " " + points[i][1] + "\n";
}
console.log(result.trim());