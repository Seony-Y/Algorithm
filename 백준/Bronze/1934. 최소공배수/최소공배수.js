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

const T = nums[0];

for (let t = 0, index = 1; t < T; t++) {
  const a = nums[index++];
  const b = nums[index++];

  const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
  const lcm = (x, y) => (x * y) / gcd(x, y);

  console.log(lcm(a, b));
}
