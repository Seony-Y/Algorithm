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

const a1 = nums[0];
const a0 = nums[1];
const c = nums[2];
const n0 = nums[3];

if (a1 <= c && a1 * n0 + a0 <= c * n0) {
  console.log(1);
} else {
  console.log(0);
}