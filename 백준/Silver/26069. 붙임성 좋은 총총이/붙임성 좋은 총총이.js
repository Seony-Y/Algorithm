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
const meetings = lines.slice(1, n + 1).map(line => line.split(" "));

const danceSet = new Set();
danceSet.add("ChongChong");

for (let i = 0; i < n; i++) {
  const [a, b] = meetings[i];
  if (danceSet.has(a) || danceSet.has(b)) {
    danceSet.add(a);
    danceSet.add(b);
  }
}

console.log(danceSet.size);