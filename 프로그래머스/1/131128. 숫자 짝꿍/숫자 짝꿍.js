//2024-11-10
function solution(X, Y) {
  let result = [];
  
  // 정규식을 사용하여 각 자리 숫자별로 등장 횟수를 구함
  for (let i = 0; i <= 9; i++) {
    const regex = new RegExp(i, "g");
    const countX = (X.match(regex) || []).length;
    const countY = (Y.match(regex) || []).length;
    
    // 공통으로 나타나는 숫자 중 짝지을 수 있는 숫자만 result에 추가
    const commonCount = Math.min(countX, countY);
    for(let j =0; j<commonCount; j++){
        result.push(i)
    }
    // result.push(...Array(commonCount).fill(i));
  }
  console.log(result)
  // result 배열을 내림차순 정렬하여 가장 큰 정수를 만듦
  result.sort((a, b) => b - a);
  
  // 배열이 비어있으면 공통 숫자가 없으므로 -1 반환
  if (result.length === 0) return "-1";
  
  // 모든 요소가 0일 경우 "0" 반환
  if (result[0] === 0) return "0";
  
  // 결과 배열을 문자열로 변환하여 반환
  return result.join("");
}
