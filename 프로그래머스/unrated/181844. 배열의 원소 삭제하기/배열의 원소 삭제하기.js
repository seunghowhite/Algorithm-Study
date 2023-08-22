function solution(arr, delete_list) {
    const answer = arr.filter((item) => {
        let TF = true;
        delete_list.forEach((delitem) => {
            if (delitem === item) TF = false;
        });
        return TF;
    });
    return answer;
}
