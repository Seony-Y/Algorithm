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

const P = nums[0];

const board = Array.from({ length: 101 }, () => Array(101).fill(0)); // 0~100 까지 존재하므로 101크기

let index = 1;
for (let i = 0; i < P; i++) {
  const x = nums[index++]; 
  const y = nums[index++]; 

  for (let row = y; row < y + 10; row++) { 
    for (let col = x; col < x + 10; col++) { 
      board[row][col] = 1; 
    }
  }
}

const area = board.reduce(
  (acc, row) => acc + row.reduce((rowAcc, cell) => rowAcc + cell, 0),
  0
);

console.log(area);