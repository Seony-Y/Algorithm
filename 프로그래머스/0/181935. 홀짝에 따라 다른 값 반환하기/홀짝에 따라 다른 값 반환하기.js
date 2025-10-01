function solution(n) {
    var answer = 0;
    if(n%2 == 0){
        //짝수
        for(let i=2;i<=n;i=i+2){
            answer += i*i
        }
    }else{
        //홀수
        for(let i=1;i<=n;i=i+2){
            answer += i
        }
    }
    return answer;
}