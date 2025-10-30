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

let totalCredit = 0;
let totalGradePoint = 0;
const grade = {
  'A+': 4.5,
  'A0': 4.0,
  'B+': 3.5,
  'B0': 3.0,
  'C+': 2.5,
  'C0': 2.0,
  'D+': 1.5,
  'D0': 1.0,
  'F': 0.0,
};  

for (let i = 0; i < 20; i++) {
  const [subject, creditStr, gradeStr] = lines[i].split(" ");
  const credit = Number(creditStr);
  let gradePoint = 0;

  if (gradeStr !== "P") {
    gradePoint = grade[gradeStr];
    totalCredit += credit;
    totalGradePoint += credit * gradePoint;
  }
}

const gpa = totalGradePoint / totalCredit;
console.log(gpa);