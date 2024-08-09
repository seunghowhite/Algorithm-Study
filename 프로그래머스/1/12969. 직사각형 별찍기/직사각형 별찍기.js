//2023-08-09
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    for(let i=0;i < b ;i++){
        console.log("*".repeat(a));
    }
});



//2023-03-20
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', data => {
//     const n = data.split(" ");
//     const a = Number(n[0]), b = Number(n[1]);
    
//     for(var i=0;i < b ;i++){
//         console.log("*".repeat(a));
//     }
    
// });