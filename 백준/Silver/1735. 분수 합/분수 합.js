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

function gcd(a, b) {
  while (b !== 0) {
    const r = a % b;
    a = b;
    b = r;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

const a1 = nums[0];
const b1 = nums[1];
const a2 = nums[2];
const b2 = nums[3];

const denominator = lcm(b1, b2);
const numerator = (denominator / b1) * a1 + (denominator / b2) * a2;

const divisor = gcd(numerator, denominator);

console.log(numerator / divisor, denominator / divisor);
