function solution(n) {
    let pizzaBox = 7
    while(pizzaBox/n<1) {
        pizzaBox+=7
    } 
    return pizzaBox/7
}