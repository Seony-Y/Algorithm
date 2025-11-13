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

const n = nums[0];
const people = [];
for (let i = 0; i < n; i++) {
  const [age, name] = lines[i + 1].split(" ");
  people.push([Number(age), name]);
}

people.sort((a, b) => a[0] - b[0]);

let result = "";
for (let i = 0; i < n; i++) {
  result += people[i][0] + " " + people[i][1] + "\n";
}
console.log(result.trim()); 