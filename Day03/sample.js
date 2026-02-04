
// let funexp = function() {
//     console.log(`this is function`);
    
// }
// funexp()

// let funarrow = () => {
//     console.log(`this is arrow function`);
    
// }
// funarrow()

// const funarr2 = (a,b) => a + b;
// console.log(funarr2(1,1));


function add(a,b) {
    const i = a+b
    console.log("sum of numbers : ", i);
    minus(i)
}
function minus(c) {

    console.log("after substraction: ", c - 2);
    
}


add(2,3,minus)
