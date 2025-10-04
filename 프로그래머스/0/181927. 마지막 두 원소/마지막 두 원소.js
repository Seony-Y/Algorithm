function solution(num_list) {
    //var answer = [];
    const last = num_list[num_list.length-1];
    const lastBefore = num_list[num_list.length-2];
    console.log(last,lastBefore)
    last > lastBefore ? num_list.push(last - lastBefore) : num_list.push(last*2)
    return num_list;
}