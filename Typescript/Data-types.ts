
let variable : string = "Hello Sairaj"
 variable = "123"
console.log(variable); //explicit inference

let variable2 = "Hello"
variable2 = "222"
console.log(variable2); // Implicit inference

//Typescript is static typed - errors shown while compilation. 
//Java script is Dynamically types - errors shown at run time.

  

// let info2 : {
//     "First-name" : string,
//     Lastname : string,
//     email : string,
//     mob : number
// }={
//     "First-name":"Sairaj",
//     Lastname : "Karpe",
//     emmail : "karpesai1619@gmail.com",
//     mob : 6304850936



// }

// console.log(info2["First-name"]);

// function infinityLoop() : never {
//     while(true) {
//         console.log("This is an infinity Loop")
//     }
// }

// infinityLoop();

//tuple data type

let user : [string , number, boolean] = ["welcome to Testleaf",20,true]
console.log(user[0]); // it starts like 0,1,2
console.log(user[1], 'K');
