const fs = require("fs");
const path = require("path");

const src = process.platform === "linux" ? 0 : (process.env.LOCAL_INPUT || path.join(__dirname, "input.txt"));
const raw = fs.readFileSync(src, "utf8").replace(/\r/g, "").trim();

const lines  = raw.split("\n");     // 줄 단위가 필요할 때
const tokens = raw.split(/\s+/);      // 공백 단위가 필요할 때
const nums = tokens.map(Number);   // 전부 숫자면 이 한 줄로도 OK

// --- 여기부터 풀이 ---

const CaseNum = nums[0];

let output = "";
for (let i = 0; i < CaseNum; i++) {
  const A = nums[2 * i + 1];
  const B = nums[2 * i + 2];
  const sum = A + B;
  output += `Case #${i + 1}: ${A} + ${B} = ${sum}\n`;
}

console.log(output.trim());
