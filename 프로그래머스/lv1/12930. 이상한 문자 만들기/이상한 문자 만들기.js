function solution(s) {
    let word=s.split(' ')
    let answer = '';
    
    for(let i=0; i<word.length;i++){
        for(let z=0;z<word[i].length;z++){
            if(z%2===0){
                answer+=word[i][z].toUpperCase();
            }else{
                answer+=word[i][z].toLowerCase();
            }
        }
        if (i < word.length -1) {
            answer += ' ';
        }
    }
    
    return answer;
}