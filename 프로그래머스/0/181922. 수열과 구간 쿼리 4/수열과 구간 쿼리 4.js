function solution(arr, queries) {
    queries.forEach(([s, e, k]) => {
        const newArr = arr.slice(s, e + 1);
        for (let i = s; i <= e; i++) {
          if (i % k === 0) {
            arr[i] += 1;
          }
        }
      })
    return arr;
}