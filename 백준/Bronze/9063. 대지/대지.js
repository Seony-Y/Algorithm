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

let minX = Infinity;
let maxX = -Infinity;
let minY = Infinity;
let maxY = -Infinity;

for (let i = 0; i < N; i++) {
  const x = nums[2 * i + 1];
  const y = nums[2 * i + 2];
  if (x < minX) minX = x;
  if (x > maxX) maxX = x;
  if (y < minY) minY = y;
  if (y > maxY) maxY = y;
}

const width = maxX - minX;
const height = maxY - minY;
const area = width * height;

console.log(area);