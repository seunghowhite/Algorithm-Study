function solution(myString) {
    const result = myString.split('').map((char) => {
        if (char < 'l') {
            return 'l';
        }
        return char;
    }).join('');
    
    return result;
}