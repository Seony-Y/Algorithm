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

let index = 0;

function cantor(n) {
    if (n === 0) {
        return "-";
    }
    const part = cantor(n - 1);
    return part + " ".repeat(part.length) + part;
}

while (index < lines.length) {
    const n = +lines[index++];
    if (isNaN(n)) break;
    console.log(cantor(n));
} 