function solution(board, k) {
    var answer = 0;
    
    board.forEach((i,iindex)=>{
        
        i.forEach((j,jindex)=>{
            console.log("iindex",iindex)
            console.log("jindex",jindex)
            // console.log(i[index],j)
            if(iindex+jindex<=k){
                answer+=board[iindex][jindex]
            }
        })
    })
    return answer;
}