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
const pos = nums.slice(1, N + 1);

pos.sort((a, b) => a - b);

let gcd = (a, b) => {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
};

let getGCDofArray = (arr) => {
  return arr.reduce((acc, val) => gcd(acc, val));
};

let diffs = [];
for (let i = 1; i < N; i++) {
  diffs.push(pos[i] - pos[i - 1]);
}

let d = getGCDofArray(diffs);
let result = diffs.reduce((acc, val) => acc + val / d - 1, 0);

console.log(result);