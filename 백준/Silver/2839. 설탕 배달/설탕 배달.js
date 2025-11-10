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

let answer = -1;

for (let i = 0; i <= Math.floor(N / 5); i++) {
  for (let j = 0; j <= Math.floor(N / 3); j++) {
    if (5 * i + 3 * j === N) {
      const cnt = i + j;
      if (answer === -1 || answer > cnt) {
        answer = cnt;
      }
    }
  }
}

console.log(answer);