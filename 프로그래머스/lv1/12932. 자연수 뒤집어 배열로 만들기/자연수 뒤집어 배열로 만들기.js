// 백승호
function solution(n) {
    let strit=[]
    let StringfromN =String(n)
    let SplittoStringfromN =StringfromN.split('')
    for(let i=0;i<SplittoStringfromN.length;i++){
        strit.push(Number(SplittoStringfromN[i]))
    }
    return strit.reverse();
}
