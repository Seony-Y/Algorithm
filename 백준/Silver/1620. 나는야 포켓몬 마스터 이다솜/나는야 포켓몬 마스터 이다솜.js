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

const [n, m] = nums.slice(0, 2);
const map = new Map();
const result = [];

for (let i = 1; i <= n; i++) {
  const name = lines[i];
  map.set(i, name);
  map.set(name, i);
}

for (let i = n + 1; i <= n + m; i++) {
  const query = lines[i];
  if (isNaN(query)) {
    result.push(map.get(query));
  } else {
    result.push(map.get(Number(query)));
  }
}

console.log(result.join("\n"));