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

const A = nums[0];
const K = nums[1];
const arr = nums.slice(2);

let count = 0;
let answer = -1;

function merge(arr, p, q, r) {
    const temp = [];
    let i = p;
    let j = q + 1;

    while (i <= q && j <= r) {
        if (arr[i] <= arr[j]) {
            temp.push(arr[i++]);
        } else {
            temp.push(arr[j++]);
        }
    }

    while (i <= q) {
        temp.push(arr[i++]);
    }

    while (j <= r) {
        temp.push(arr[j++]);
    }

    for (let k = p; k <= r; k++) {
        arr[k] = temp[k - p];
        count++;
        if (count === K) {
            answer = arr[k];
        }
    }
}

function mergeSort(arr, p, r) {
    if (p < r) {
        const q = Math.floor((p + r) / 2);
        mergeSort(arr, p, q);
        mergeSort(arr, q + 1, r);
        merge(arr, p, q, r);
    }
}

mergeSort(arr, 0, A - 1);
console.log(answer);