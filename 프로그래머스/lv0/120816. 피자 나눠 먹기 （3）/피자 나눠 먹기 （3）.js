function solution(slice, n) {
    var pizza = 1;
    let allslice=slice

// 슬라이스는 2~10개
// 사람은 1명~100명
// 더 시켜야하는 경우. 전체 슬라이스 보다 사람이 더 많은 경우
// 더시키면 slice*2개를 기존 slice에 더해준다.
// 그래도 슬라이스가 부족하면 한판더 시킨다. 반복문
    // for(let i=0;i<pizza;i++){
    //     if(slice<n){
    //         pizza+=1
    //         slice+=slice
    //     }
    // }
    while(allslice<n){
        pizza+=1
        allslice+=slice
    }
    return pizza;
}