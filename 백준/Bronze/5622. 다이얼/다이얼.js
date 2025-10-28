// 입력 기본 템플릿 (BOJ + 로컬 겸용, CRLF 정리)
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

const input = lines[0];
const dial = [
  "ABC",
  "DEF",
  "GHI",
  "JKL",
  "MNO",
  "PQRS",
  "TUV",
  "WXYZ",
];

let time = 0;
  
for (let i = 0; i < input.length; i++) { 
  const char = input[i];
  for (let j = 0; j < dial.length; j++) {
    if (dial[j].includes(char)) {
      time += j + 3; // 다이얼 번호에 따른 시간 계산
      break;
    }
  }
}

console.log(time);