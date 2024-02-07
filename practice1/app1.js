// let fs = require('fs');
// let input = fs.readFileSync('input.txt').toString().split('\n');

//readline 모듈
//  const rl =require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout
//  });

//  let input = [];
//  rl.on('ilne', function(ilne){
//     input.push(line);
//  }).on('close',function(){
//     console.log(input);
//     process.exit();
//  })

// reduce()
let data =[5,2,9,8,4];
let minValue=data.reduce((a,b)=> Math.min(a,b));
console.log(minValue);

let sum = data.reduce((a,b)=> a+b);
console.log(sum);



