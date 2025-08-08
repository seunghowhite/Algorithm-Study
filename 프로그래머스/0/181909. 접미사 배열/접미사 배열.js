function solution(my_string) {
  const generateSuffix = (str, start) => str.slice(start);

  let answer = [];
  for (let i = 0; i < my_string.length; i++) {
    answer.push(generateSuffix(my_string, i));
  }
  return answer.sort();
}