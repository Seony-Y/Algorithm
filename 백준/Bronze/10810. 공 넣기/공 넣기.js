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

// --- 여기부터 풀이 ---

const [N, M] = nums.slice(0, 2);
const box = new Array(N).fill(0).map(() => 0);

for (let l = 0; l < M; l++) {
  const [i, j, k] = nums.slice(2 + l * 3, 5 + l * 3);
  for (let idx = i - 1; idx < j; idx++) {
    box[idx] = k; // 이미 공이 있을땐 빼고 새로 넣음
  }
}

console.log(box.join(" "));