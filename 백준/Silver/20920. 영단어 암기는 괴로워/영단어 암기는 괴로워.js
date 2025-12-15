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

const n = nums[0];
const m = nums[1];
const words = lines.slice(1, n + 1);

const freqMap = new Map();
for (const word of words) {
  if (word.length >= m) {
    freqMap.set(word, (freqMap.get(word) || 0) + 1);
  }
}

const uniqueWords = Array.from(freqMap.keys());

uniqueWords.sort((a, b) => {
  const freqA = freqMap.get(a);
  const freqB = freqMap.get(b);
  if (freqA !== freqB) {
    return freqB - freqA; 
  }
  if (a.length !== b.length) {
    return b.length - a.length; 
  }
  return a.localeCompare(b); // 사전 순 오름차순
});

console.log(uniqueWords.join("\n"));