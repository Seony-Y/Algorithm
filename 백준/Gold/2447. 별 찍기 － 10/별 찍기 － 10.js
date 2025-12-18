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

function printStars(size) {
  if (size === 1) {
    return ["*"];
  }

  const smallerPattern = printStars(size / 3);
  const pattern = [];

  for (let i = 0; i < smallerPattern.length; i++) {
    pattern.push(
      smallerPattern[i].repeat(3)
    );
  }

  for (let i = 0; i < smallerPattern.length; i++) {
    pattern.push(
      smallerPattern[i] + " ".repeat(size / 3) + smallerPattern[i]
    );
  }

  for (let i = 0; i < smallerPattern.length; i++) {
    pattern.push(
      smallerPattern[i].repeat(3)
    );
  }

  return pattern;
}

const result = printStars(n);
console.log(result.join("\n"));