//2024-08-14
function solution(sizes) {
    var answer = 0;
    let row =0
    let col =0
    sizes.forEach((rowcol)=>{
        let sortedRowCol =[]
        if(rowcol[0]<rowcol[1]){
            sortedRowCol[0] =rowcol[1]
            sortedRowCol[1] =rowcol[0]
        }else{
            sortedRowCol=rowcol
        }
        if(row<sortedRowCol[0]){
            row=sortedRowCol[0]
        }
        if(col<sortedRowCol[1]){
            col=sortedRowCol[1]
        }
        
    })
    return row*col;
}









//2023-03-20
// function solution(sizes) {
//     var biggerSideMax = 0;
//     var smallerSideMax = 0;
//     for(let i=0;i<sizes.length;i++) {
        
//         if (sizes[i][0]>sizes[i][1]){
            
//             if(sizes[i][0]>= biggerSideMax){
//                 biggerSideMax=sizes[i][0]
//             }if(sizes[i][1]>=smallerSideMax){
//                 smallerSideMax=sizes[i][1]
//             }
            
//         }else{
           
//             if(sizes[i][1]>= biggerSideMax){
//                  biggerSideMax=sizes[i][1]
//             }if(sizes[i][0]>=smallerSideMax){
//                 smallerSideMax=sizes[i][0]
//             }
            
//         }
            
//     }
//     return   biggerSideMax*smallerSideMax;
// }