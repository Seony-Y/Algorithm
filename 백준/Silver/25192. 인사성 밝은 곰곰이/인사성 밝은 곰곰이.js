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
const records = lines.slice(1, n + 1);

const users = new Set();
let count = 0;

for (let i = 0; i < n; i++) {
  const record = records[i];
  if (record === "ENTER") {
    users.clear();
  } else {
    if (!users.has(record)) {
      users.add(record);
      count++;
    }
  }
}

console.log(count);