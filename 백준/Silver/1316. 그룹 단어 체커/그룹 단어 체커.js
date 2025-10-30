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
const words = tokens.slice(1, N + 1);

// 그룹단어 세기

let groupWordCount = 0;

words.forEach((word) => {
  const seen = new Set(); 
  let prevChar = null;
  let isGroupWord = true;

  for (const char of word) { 
    if (char !== prevChar) {
      if (seen.has(char)) { 
        isGroupWord = false; 
        break;
      }
      seen.add(char); 
      prevChar = char; 
    }
  }

  if (isGroupWord) {
    groupWordCount++;
  }
});

console.log(groupWordCount);