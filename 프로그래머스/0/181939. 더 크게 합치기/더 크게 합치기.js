function solution(a, b) {
    var answer = 0;
    let ab = String(a) + String(b);
    let ba = String(b) + String(a);
    console.log(ab,ba)
    return Number(ab) < Number(ba) ? Number(ba) : Number(ab)
}