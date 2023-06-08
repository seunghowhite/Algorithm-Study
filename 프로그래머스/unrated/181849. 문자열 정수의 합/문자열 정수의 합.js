function solution(num_str) {
    return num_str.split("").reduce((acc,pre)=>parseInt(acc)+parseInt(pre),0);
}