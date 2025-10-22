const fs = require("fs");
const path = require("path");

const src = process.platform === "linux" ? 0 : (process.env.LOCAL_INPUT || path.join(__dirname, "input.txt"));
const raw = fs.readFileSync(src, "utf8").replace(/\r/g, "").trim();

const lines  = raw.split("\n");     // 줄 단위가 필요할 때
const tokens = raw.split(/\s+/);      // 공백 단위가 필요할 때
const nums = tokens.map(Number);   // 전부 숫자면 이 한 줄로도 OK

// --- 여기부터 풀이 ---

const [H, M] = lines[0].split(" ").map(Number);
const C = Number(lines[1]);

let Time = new Date();
Time.setHours(H);
Time.setMinutes(M);
Time.setMinutes(Time.getMinutes() + C); // C분 더하기
console.log(Time.getHours() + " " + Time.getMinutes());

