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

const N = nums[0];
const queue = [];
let frontIdx = 0;
let backIdx = 0;
let output = [];

for (let i = 1; i <= N; i++) {
  const cmd = lines[i].split(" ");
  switch (cmd[0]) {
    case "push":
      queue[backIdx++] = Number(cmd[1]);
      break;
    case "pop":
      if (frontIdx === backIdx) {
        output.push(-1);
      } else {
        output.push(queue[frontIdx]);
        frontIdx++;
      }
      break;
    case "size":
      output.push(backIdx - frontIdx);
      break;
    case "empty":
      output.push(frontIdx === backIdx ? 1 : 0);
      break;
    case "front":
      if (frontIdx === backIdx) {
        output.push(-1);
      } else {
        output.push(queue[frontIdx]);
      }
      break;
    case "back":
      if (frontIdx === backIdx) {
        output.push(-1);
      } else {
        output.push(queue[backIdx - 1]);
      }
      break;
  }
}

console.log(output.join("\n")); 