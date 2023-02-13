function solution(strlist) {
    var answer = [];
//     문자열의 겟수 알아보는 함수 찾기.
// 그 리스트의 0~값부터 그 인덱스 값의 갯수 확인.
    for(var i=0 ;i<strlist.length;i++){
        answer[i] = strlist[i].length
    }
    return answer;
}