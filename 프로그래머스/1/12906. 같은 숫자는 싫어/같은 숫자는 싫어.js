//2024-08-09
function solution(arr)
{
    var answer = [];
    answer=arr.filter((num,index)=>num!=arr[index+1]);  
    return answer;
}



//2023-03-20
// function solution(arr)
// {
//     var answer = [];
//     answer=arr.filter((num,index)=>num!=arr[index+1]);  
//     return answer;
// }