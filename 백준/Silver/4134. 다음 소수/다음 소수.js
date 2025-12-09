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

let idx = 0;
const T = nums[idx++];

function nextPrime(n) {
  function isPrime(x) {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; i++) {
      if (x % i === 0) return false;
    }
    return true;
  }

  let candidate = n;
  while (true) {
    if (isPrime(candidate)) return candidate;
    candidate++;
  }
}

const results = [];
for (let t = 0; t < T; t++) {
  const n = nums[idx++];
  results.push(nextPrime(n));
}

console.log(results.join("\n"));  