function solution(num_list) {
    let hol = ""; 
    let jac = ""; 

    num_list.forEach((number) => {
        if (number % 2 === 0) {
            jac += number; 
        } else {
            hol += number; 
        }
    });

    return Number(hol) +  Number(jac);
}
