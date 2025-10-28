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
const T = Number(lines[0]);
let index = 1;
const results = [];

for (let t = 0; t < T; t++) {
  const [R, S] = lines[index++].split(" "); // R: 반복 횟수, S: 문자열
  let result = "";

  for (const char of S) { // 
    result += char.repeat(Number(R));
  }

  results.push(result);
}

console.log(results.join("\n"));