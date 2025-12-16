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

const t = nums[0];
let index = 1;

function recursion(s, l, r, count) {
    count.count += 1;
    if (l >= r) {
        return 1;
    } else if (s[l] !== s[r]) {
        return 0;
    } else {
        return recursion(s, l + 1, r - 1, count);
    }
}

function isPalindrome(s) {
    const count = { count: 0 };
    const result = recursion(s, 0, s.length - 1, count);
    return { result, calls: count.count };
}

for (let i = 0; i < t; i++) {
    const s = lines[index++];
    const { result, calls } = isPalindrome(s);
    console.log(result, calls);
} 