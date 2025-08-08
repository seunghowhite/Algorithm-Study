function solution(my_string, n) {
    const start = my_string.length - n;
    return my_string.slice(start);
}