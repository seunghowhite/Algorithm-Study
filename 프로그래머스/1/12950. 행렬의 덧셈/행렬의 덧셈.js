//2024-08-08
function solution(arr1, arr2) {
    return arr1.map((inarr, index) => {
        return inarr.map((num, inIndex) => {
            return num + arr2[index][inIndex];
        });
    });
}





//2023-03-20
// function solution(arr1, arr2) {
//     var answer = [];
//    var sumarr=[];
    
//     for(let i=0;i<arr1.length;i++){
//             // var sumarr=[];
//         for(let z=0;z<arr1[i].length;z++){ 
            
//             sumarr.push(arr1[i][z]+arr2[i][z])
            
//         } 
//         console.log('다 더한값',sumarr)
//          answer.push(sumarr)
//     }
//     return answer;
// }