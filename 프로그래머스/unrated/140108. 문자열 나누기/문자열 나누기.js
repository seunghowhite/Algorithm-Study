function solution(s) {
  let answer = 0;
  let fristStr = "";
  let outherStr = "";
  for (let i = 0; i < s.length; i++) {
    if (fristStr == "") {
      fristStr = s[i];
      continue;
    }
    if (s[i] === fristStr[0]) {
      fristStr = fristStr + s[i];
    } else if (s[i] !== fristStr[0]) {
      outherStr += s[i];
      if (fristStr.length === outherStr.length) {
        fristStr = "";
        outherStr = "";
        answer++;
      }
    }
  }
  
  if (fristStr !== "") {
    answer++;
  }

  return answer;
}
