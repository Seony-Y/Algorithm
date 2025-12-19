const fs = require("fs");
const path = require("path");

const src =
  process.platform === "linux"
    ? 0
    : process.env.LOCAL_INPUT || path.join(__dirname, "input.txt");
const raw = fs.readFileSync(src, "utf8").replace(/\r/g, "").trim();

const lines = raw.split("\n"); 
const tokens = raw.split(/\s+/);
const nums = tokens.map(Number);

const board = [];
for (let i = 0; i < 9; i++) {
  board.push(nums.slice(i * 9, i * 9 + 9));
}

const isValid = (row, col, num) => {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num) return false;
    if (board[i][col] === num) return false;
    const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const boxCol = 3 * Math.floor(col / 3) + (i % 3);
    if (board[boxRow][boxCol] === num) return false;
  }
  return true;
};

const solveSudoku = () => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isValid(row, col, num)) {
            board[row][col] = num;
            if (solveSudoku()) {
              return true;
            }
            board[row][col] = 0; // 백트래킹
          }
        }
        return false; // 가능한 숫자가 없음
      }
    }
  }
  return true; // 모든 칸이 채워짐
};

solveSudoku();

const result = board.map(row => row.join(" ")).join("\n");
console.log(result);  
