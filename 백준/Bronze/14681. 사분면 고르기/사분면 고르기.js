const fs = require("fs");
const path = require("path");

const src = process.platform === "linux" ? 0 : (process.env.LOCAL_INPUT || path.join(__dirname, "input.txt"));
const raw = fs.readFileSync(src, "utf8").replace(/\r/g, "").trim();

const lines  = raw.split("\n");     // 줄 단위가 필요할 때
const tokens = raw.split(/\s+/);      // 공백 단위가 필요할 때
const nums = tokens.map(Number);   // 전부 숫자면 이 한 줄로도 OK

// --- 여기부터 풀이 ---

const x = nums[0];
const y = nums[1];
if (x > 0 && y > 0) {
    console.log(1);
} else if (x < 0 && y > 0) {
    console.log(2);
} else if (x < 0 && y < 0) {
    console.log(3);
} else {
    console.log(4);
}