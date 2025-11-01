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

console.log(baseToDecimal(N, B));

function baseToDecimal(N, B) {
  let result = 0;
  const len = N.length;

  for (let i = 0; i < len; i++) {
    const char = N[len - 1 - i];
    let value;

    if (char >= '0' && char <= '9') {
      value = char.charCodeAt(0) - '0'.charCodeAt(0);
    } else {
      value = char.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
    }

    result += value * Math.pow(B, i);
  }

  return result;
}
