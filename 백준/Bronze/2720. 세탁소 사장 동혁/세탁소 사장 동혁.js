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

const T = nums[0];
const coins = [25, 10, 5, 1];

for (let i = 1; i <= T; i++) {
  let amount = nums[i];
  const result = [];

  for (const coin of coins) {
    const count = Math.floor(amount / coin);
    result.push(count);
    amount -= count * coin;
  }

  console.log(result.join(" "));
}