function solution(num_list) {
    let answer = [...num_list];

    let last = num_list[num_list.length - 1];
    let secondLast = num_list[num_list.length - 2];

    if (last > secondLast) {
        answer.push(last - secondLast);
    } else {
        answer.push(last * 2);
    }

    return answer;
}
