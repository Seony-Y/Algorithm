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

const [x1, y1] = nums.slice(0, 2);
const [x2, y2] = nums.slice(2, 4);
const [x3, y3] = nums.slice(4, 6);
const x4 = x1 === x2 ? x3 : x1 === x3 ? x2 : x1;
const y4 = y1 === y2 ? y3 : y1 === y3 ? y2 : y1;

console.log(`${x4} ${y4}`);
