function solution(my_string, queries) {
    const arrMyString = my_string.split("");

    queries.forEach(([start, end]) => {
        // end + 1을 해서 end 인덱스까지 포함
        const arrReverse = arrMyString.slice(start, end + 1).reverse();

        // 교체할 길이는 (end - start + 1)
        arrMyString.splice(start, end - start + 1, ...arrReverse);
    });

    return arrMyString.join("");
}
