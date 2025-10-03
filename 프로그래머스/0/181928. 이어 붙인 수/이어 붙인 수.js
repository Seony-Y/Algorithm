function solution(num_list) {
    var even = '';
    var odd = '';
    for(const i in num_list){
        if(num_list[i]%2 === 0){
            even += String(num_list[i])
        }else{
            odd += String(num_list[i])
        }
    }
    //console.log(even,odd)
    return Number(even) + Number(odd)
}