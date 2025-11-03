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

const [N, K] = nums;

function getKthDivisor(N, K) {
  const divisors = [];
  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      divisors.push(i);
    }
  }
  return divisors.length >= K ? divisors[K - 1] : 0; // K번째 약수가 없으면 0 반환
}

const result = getKthDivisor(N, K);
console.log(result);