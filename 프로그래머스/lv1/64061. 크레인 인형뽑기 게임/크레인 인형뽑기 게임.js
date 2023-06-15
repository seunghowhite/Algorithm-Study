function solution(board, moves) {
  let answer = 0;
  let boards = board;
  let dolls = [];
  moves.forEach((move) => {
    for (let i = 0; i < boards.length; i++) {
      if (boards[i][move - 1] !== 0) {
        dolls.push(boards[i][move - 1])      
        boards[i].splice(move - 1, 1, 0);
        break;
      }
    }
  });

    
  for(let j=0;j<dolls.length;j++){
      if(dolls[j]==dolls[j+1]){
          dolls.splice(j,2)
    
          answer+=2
          j=-1

      }
  } 
    
  return answer;
}
