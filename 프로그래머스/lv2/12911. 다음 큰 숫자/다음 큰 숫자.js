function solution(n) {
  var answer = 0;
  var binaryN = n.toString(2);
  var countN = binaryN.match(/1/g).length;

  while (true) {
    n++;

    var binaryNextN = n.toString(2);
    var countNextN = binaryNextN.match(/1/g).length;

    if (countN === countNextN) {
      answer = n;
      break;
    }
  }

  return answer;
}
