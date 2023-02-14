function solution(strings, n) {
    strings.sort(function(a,b){
        var firststring = a[n];
        var secondstring = b[n];
        if(firststring===secondstring){
             return (a > b) -(a < b);
        }else{
            return (firststring>secondstring)-(firststring< secondstring);
        }
    })
    return strings;
}