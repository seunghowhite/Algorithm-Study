function solution(array, height) {
    var countnum =0;   
    for(let i=0;i<array.length;i++){
        if(array[i]>height){
            countnum++
        }
    }
    return countnum;
}