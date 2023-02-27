function solution(my_string) {
    var answer = my_string.split('').map((spell)=>{
        if(spell===spell.toUpperCase()){return spell.toLowerCase()}
        else{return spell.toUpperCase()}
    }).join('');
    return answer;
}