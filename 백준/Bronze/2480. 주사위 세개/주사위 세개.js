const fs = require("fs");
const path = require("path");

const src = process.platform === "linux" ? 0 : (process.env.LOCAL_INPUT || path.join(__dirname, "input.txt"));
const raw = fs.readFileSync(src, "utf8").replace(/\r/g, "").trim();

const lines  = raw.split("\n");     // 줄 단위가 필요할 때
const tokens = raw.split(/\s+/);      // 공백 단위가 필요할 때
const nums = tokens.map(Number);   // 전부 숫자면 이 한 줄로도 OK

// --- 여기부터 풀이 ---

const [a, b, c] = nums;

if (a === b && b === c) {
    console.log(10000 + a * 1000);
} else if (a === b || a === c) {
    console.log(1000 + a * 100);
} else if (b === c) {
    console.log(1000 + b * 100);
} else {
    console.log(Math.max(a, b, c) * 100);
} 