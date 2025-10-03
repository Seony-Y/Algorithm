function solution(code) {
      var answer = "";
      var mode = 0;
      for (let i = 0; i < code.length; i++) {
        if (mode === 0) {
            code[i] !== "1" && i % 2 === 0 ? (answer += code[i]) : null;
            code[i] === "1" && (mode = 1);
        } else {
            code[i] !== "1" && i % 2 !== 0 ? (answer += code[i]) : null;
            code[i] === "1" && (mode = 0);
        }
    }
    return answer === "" ? "EMPTY" : answer;
}