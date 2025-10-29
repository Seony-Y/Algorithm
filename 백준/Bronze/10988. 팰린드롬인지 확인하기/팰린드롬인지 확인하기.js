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

const str = lines[0];
const len = str.length;
let isPalindrome = true;

for (let i = 0; i < Math.floor(len / 2); i++) {
  if (str[i] !== str[len - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log(isPalindrome ? 1 : 0);