function solution(arr, queries) {
    return queries.map(([s, e, k]) => {
        const list = arr.slice(s, e + 1).sort((a, b) => a - b);
        const found = list.find(num => num > k);
        return found !== undefined ? found : -1;
    });
}
