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
const max = Math.max(...nums);
const isPrime = new Array(max + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i * i <= max; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= max; j += i) {
      isPrime[j] = false;
    }
  }
}

const results = [];
for (let t = 1; t <= T; t++) {
  const n = nums[t];
  let count = 0;
  for (let i = 2; i <= n / 2; i++) {
    if (isPrime[i] && isPrime[n - i]) {
      count++;
    }
  }
  results.push(count);
}

console.log(results.join("\n"));  