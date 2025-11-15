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

const n = nums[0];
const cards = nums.slice(1, n + 1);
const m = nums[n + 1];
const targets = nums.slice(n + 2, n + 2 + m);

const cardMap = new Map();
for (const card of cards) {
  cardMap.set(card, (cardMap.get(card) || 0) + 1);
}

const result = [];
for (const target of targets) {
  result.push(cardMap.get(target) || 0);
}

console.log(result.join(" "));