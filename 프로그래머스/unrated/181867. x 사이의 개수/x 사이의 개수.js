function solution(myString) {
    return myString.split("x").map((item)=>{
        return item.length
    });
}