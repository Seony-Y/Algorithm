function solution(num_list) {
    const acc1 = num_list.reduce((acc, currentValue) => {
      return acc * currentValue
    }, 1);
    
    const acc2 = num_list.reduce((acc, currentValue) => {
      return acc + currentValue
    }, 0);
    
    return acc1 < acc2*acc2 ? 1 : 0
}