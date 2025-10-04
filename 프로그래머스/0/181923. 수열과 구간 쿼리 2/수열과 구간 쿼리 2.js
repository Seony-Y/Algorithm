function solution(arr, queries) {
    const answer = [];
    queries.forEach(([s, e, k]) => {
        const newArr = arr.slice(s, e + 1);
        const filtered = newArr.filter(num => num > k);
        answer.push(filtered.length ? Math.min(...filtered) : -1);
        
    })
    return answer;
}