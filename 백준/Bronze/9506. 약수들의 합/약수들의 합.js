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


for (const n of nums) {
  if (n === -1) break; 

  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) sum += i;
  }

  if (sum === n) {
    let result = `${n} = `;
    const divisors = [];
    for (let i = 1; i <= n / 2; i++) {
      if (n % i === 0) divisors.push(i);
    }
    result += divisors.join(" + ");
    console.log(result);
  } else {
    console.log(`${n} is NOT perfect.`);
  }
}