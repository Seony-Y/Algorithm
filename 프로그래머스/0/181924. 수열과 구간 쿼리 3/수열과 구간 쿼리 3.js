function solution(arr, queries) {
    var answer = [];
    for(let i=0; i<queries.length; i++){
        const change1 = queries[i][0];
        const change2 = queries[i][1];
        const temp = arr.splice(change1, 1,arr[change2])[0];
        arr.splice(change2, 1, temp);
    }
    return arr;
}
