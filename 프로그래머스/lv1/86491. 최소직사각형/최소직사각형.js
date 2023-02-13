function solution(sizes) {
    var biggerSideMax = 0;
    var smallerSideMax = 0;
//    가로가 세로보다 길다면
//    그리고 그 가로가 가장큰 가로보다 길다면
//    그 가로는 가장큰 가로고, 나머지 부분은 세로다. 가장큰 세로보다 크다면 가장큰 세로다.
    for(let i=0;i<sizes.length;i++) {
        
        if (sizes[i][0]>sizes[i][1]){
            
            if(sizes[i][0]>= biggerSideMax){
                biggerSideMax=sizes[i][0]
            }if(sizes[i][1]>=smallerSideMax){
                smallerSideMax=sizes[i][1]
            }
            
        }else{
           
            if(sizes[i][1]>= biggerSideMax){
                 biggerSideMax=sizes[i][1]
            }if(sizes[i][0]>=smallerSideMax){
                smallerSideMax=sizes[i][0]
            }
            
        }
            
    }
    return   biggerSideMax*smallerSideMax;
}