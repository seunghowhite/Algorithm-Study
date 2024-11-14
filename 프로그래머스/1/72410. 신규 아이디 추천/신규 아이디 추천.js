function solution(new_id) {
    var answer = '';
// 1단계 모든 문자를 소문자로 치환하라.
new_id = new_id.toLowerCase();
// 2단계 알파벳 소문자 숫자 빼기 밑줄 마침표를 제외한 모든 문자를 제거하라.
// * 알파벳 소문자 , 숫자, 언더스코어바 (_) 는 정규표현식에서 묶어 생각하면 된다.
new_id = new_id.toLowerCase()
         .replace(/[^\w\.\-]/g,'');
// 3단계 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표로 치환한다.
new_id = new_id.toLowerCase()
         .replace(/[^\w\.\-]/g,'')
         .replace(/[\.]{2,}/g,'.');
// 4단계 마침표(.)가 처음이나 끝에 위치한다면 제거한다.
new_id = new_id.toLowerCase()
         .replace(/[^\w\.\-]/g,'')
         .replace(/[\.]{2,}/g,'.')
         .replace(/^\./,'')
         .replace(/\.$/,'');
// 5단계 new_id가 빈 문자열이면, "a"를 대입한다.
if(!new_id){
  new_id="a";
}
// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거하고, 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거
if(new_id.length>=16) {
new_id = new_id.slice(0,15).replace(/\.$/,'');
}
// 7단계 new_id의 길이가 2자 이하면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 추가
if(new_id.length<=2){
new_id = new_id.padEnd(3,new_id[new_id.length-1]);
}
    return new_id;
}