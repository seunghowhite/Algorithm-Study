function solution(n, arr1, arr2) {
  var answer = [];
  //문자 변환기
  const changeshap = (arr) => {
    const shapArr = arr.map((item) => {
      let bi = item.toString(2);
      if (bi.length < n) {
        bi = "0".repeat(n - bi.length) + bi;
      }
      return bi.split("");
    });
    return shapArr;
  };
  //맵 합치기
  let maps = [];
for (let i = 0; i < n; i++) {
  let show = ""; 
  for (let j = 0; j < n; j++) {
    if (changeshap(arr1)[i][j] === "1" || changeshap(arr2)[i][j] === "1") {
      show += "#";
    } else {
      show += " "; 
    }
  }
  maps.push(show);
}

  return maps;
}
