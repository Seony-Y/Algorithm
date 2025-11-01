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

const [N, B] = [tokens[0], Number(tokens[1])];
const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let result = "";
let num = BigInt(N);
const bigB = BigInt(B);

if (num === 0n) {
  result = "0";
} else {
  while (num > 0n) {
    const remainder = Number(num % bigB);
    result = digits[remainder] + result;
    num = num / bigB;
  }
}

console.log(result);