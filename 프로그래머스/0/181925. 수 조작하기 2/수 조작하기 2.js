function solution(numLog) {
    var answer = '';
    for(let i=0; i<numLog.length - 1; i++){
        const numData = numLog[i+1] - numLog[i]
        if(numData === 1){
            answer += 'w'
        }else if(numData === -1){
            answer += 's'
        }else if(numData === 10){
            answer += 'd'
        }else{
            answer += 'a'
        }
    }
    return answer;
}
