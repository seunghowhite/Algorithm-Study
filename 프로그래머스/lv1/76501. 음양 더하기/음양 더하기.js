function solution(absolutes, signs) {
    var answer = 0;
//     값매칭 배열 1의 값이 treu면 그냥
//     배열 2의 값이 fale면 -붙여주기
// 그리고 돌때마다 답에 더해주기
    for(var i=0;i<absolutes.length;i++){
        if(signs[i]){
            answer=answer+absolutes[i]
        }else{
            answer=answer-absolutes[i]
        }
    }
    return answer;
}