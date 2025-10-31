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

const [N, M] = nums.splice(0, 2);
const A = [];
const B = [];

for (let i = 0; i < N; i++) {
  A.push(nums.splice(0, M));
}

for (let i = 0; i < N; i++) {
  B.push(nums.splice(0, M)); 
}

const result = [];
for (let i = 0; i < N; i++) {
  const row = [];
  for (let j = 0; j < M; j++) {
    row.push(A[i][j] + B[i][j]);
  }
  result.push(row.join(" "));
}

console.log(result.join("\n"));