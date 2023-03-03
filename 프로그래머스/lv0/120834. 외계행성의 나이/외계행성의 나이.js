function solution(age) {
    var answer = '';
    let ages={
        0:'a',
        1:'b',
        2:'c',
        3:'d',
        4:'e',
        5:'f',
        6:'g',
        7:'h',
        8:'i',
        9:'j', 
    }
    
    
    let an = String(age).split('')
    let numan =an.map(a=>parseInt(a))
    
    let bn= numan.map((num)=>{
        return (ages[num])
    }).join('')
    return bn;
}