function solution(ineq, eq, n, m) {
    let answer = 0;
    
    const string = ineq+eq
    switch (string) {
      case "<=":
            answer = n<=m?1:0
        break;
      case ">=":
            answer = n>=m?1:0
        break;
      case "<!":
            answer = n<m?1:0
        break;
      case ">!":
            answer = n>m?1:0
        break;
    }
    return answer;
}