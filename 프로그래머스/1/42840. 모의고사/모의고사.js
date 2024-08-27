//2024-08-27
function solution(answers) {
    let answer = [];
    const supo1 = [1, 2, 3, 4, 5];
    const supo2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const supo3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    function filterArray(array){
        return answers.filter((a,i)=> a === array[i%array.length]).length;
    }
    const a1c = filterArray(supo1)
    const a2c = filterArray(supo2)
    const a3c = filterArray(supo3)
    const max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}