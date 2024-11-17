//2024-11-17
function solution(today, terms, privacies) {
    let result = [];
    let obj1 = {};
    for(let e of terms){
        const [type, month] = e.split(" ");
        obj1[type] = month;
    }
    for(let i = 0; i < privacies.length; i++){
        const[start, type] = privacies[i].split(" ");
        let now = new Date(start);
        let date = new Date(today);
        now.setMonth(now.getMonth() + Number(obj1[type]));
        if(date >= now) result.push(i+1);
    }
    return result;
}



//2023-03-20
// function solution(today, terms, privacies) {
//   const answer = [];

//   const todatDate = new Date(today);

//   const termType = {};
//   terms.forEach((item) => {
//     const [type, term] = item.split(" ");
//     termType[type] = Number(term);
//   });

//   privacies.forEach((item, idx) => {
//     const [date, type] = item.split(" ");
//     const tableDate = new Date(date);
//     tableDate.setMonth(tableDate.getMonth() + termType[type]);
//     if (tableDate <= todatDate) {
//         answer.push(idx + 1)
//     };
//   });

//   return answer;
// }