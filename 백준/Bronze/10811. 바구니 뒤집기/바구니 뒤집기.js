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
const box = Array.from({ length: N }, (_, i) => i + 1);

for (let i = 0; i < M; i++) {
  const a = nums[2 + i * 2];
  const b = nums[2 + i * 2 + 1];
  const temp = box.slice(a - 1, b).reverse();
  //console.log(temp);
  for (let j = a - 1; j < b; j++) {
    box[j] = temp[j - (a - 1)]; // 역순으로 바꾼 값을 다시 할당
  }
}

console.log(box.join(" "));