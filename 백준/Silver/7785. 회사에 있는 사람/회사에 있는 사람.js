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

const n = Number(lines[0]);
const set = new Set();

for (let i = 1; i <= n; i++) {
  const [name, cmd] = lines[i].split(" ");
  if (cmd === "enter") {
    set.add(name);
  } else {
    set.delete(name);
  }
}

const result = Array.from(set).sort().reverse();
console.log(result.join("\n")); 