function solution(my_string) {
    var answer = [];
    let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let a = [];
    a.length = 52;
    a.fill(0);

    my_string.split("").map((n)=>{
        a[al.indexOf(n)]+=1
    })

    return a;
}