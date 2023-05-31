function solution(N, stages) {
    let pur = [];
    let count=stages.length
    let pursent={};
    for(let i=1;i<=N;i++){
        const stayUserNum=stages.filter((stage)=>stage===i)
        pur.push(stayUserNum.length)
    }
    for(let j=0;j<pur.length;j++){
        pursent[j+1]=pur[j]/(count)
        count-=pur[j]
    }

    const result = Object.entries(pursent)
      .sort((a, b) => b[1] - a[1])
      .map(entry => parseInt(entry[0]));
    return result

}