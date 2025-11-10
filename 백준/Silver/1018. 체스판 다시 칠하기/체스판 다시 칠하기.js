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

const [N, M] = nums;
const board = lines.slice(1, N + 1).map((line) => line.split(""));

let minCount = Infinity;

for (let row = 0; row <= N - 8; row++) {
  for (let col = 0; col <= M - 8; col++) {
    let countWStart = 0; // W로 시작하는 경우
    let countBStart = 0; // B로 시작하는 경우

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const currentCell = board[row + i][col + j];
        const isEvenPosition = (i + j) % 2 === 0;

        if (isEvenPosition) {
          if (currentCell !== "W") countWStart++;
          if (currentCell !== "B") countBStart++;
        } else {
          if (currentCell !== "B") countWStart++;
          if (currentCell !== "W") countBStart++;
        }
      }
    }

    const currentMin = Math.min(countWStart, countBStart);
    minCount = Math.min(minCount, currentMin);
  }
}

console.log(minCount);