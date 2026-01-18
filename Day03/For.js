

// for (let index = 0; index < 10 ; index++) {
//     console.log(index);
// }

for (let index = 0; index < 10 ; index++) {
    if(index%2===0)
        console.log('Even : ' +index);
    else console.log('Odd : ' +index);        
}

let number = 10 ;
while (number) {
    console.log(number);
    number--
}

let CompanyName = 'Testleaf'
let FirmName = 'Testleaf'
console.log(CompanyName , FirmName );

console.log(CompanyName === FirmName);

let CompanyNameNew = new String('TestLeaf')
let FirmNameNew = new String('Testleaf')

console.log(CompanyNameNew , FirmNameNew)
console.log(CompanyNameNew === FirmNameNew);
console.log(CompanyNameNew==FirmNameNew);

console.log('1' == 1);

console.log(typeof CompanyNameNew);
console.log(typeof CompanyName);


let testEsc = ' It\'s a Regression Testing '
let TestEscDbl = "Hello \"Mr Sairaj\" "

console.log(testEsc, TestEscDbl );

let Testcase = " Create a New Lead"
let TestcaseId = " \n 123"

let resultconcat = Testcase.concat( TestcaseId)
console.log(resultconcat);

function funName(x){
    let Output = `There is ${x} Testcases`
    console.log(Output);
    
}

funName ("200")

function Fname (y) {
    let outputs = `There is ${y} Testcases`
    console.log(outputs);
    
}
let inputvalue = process.argv[2]
Fname(inputvalue)


//Class room activity : reverse a string  
let companyName = "Testleaf"
reversestring =''
strcount = companyName.length-1
for (index=strcount; index>=0; index-- ) {
    // console.log(companyName.charAt(index));
    reversestring = reversestring + companyName.charAt(index);    
}


console.log(`Reverse String is -> ${reversestring}`);

let MyName = "Sairaj"
 reversestring = ''
strcount = MyName.length-1
for (index = strcount; index >= 0;  index-- ) {
    reversestring = reversestring + MyName.charAt(index)
}

console.log(reversestring);





function checkAvailabilty(movieName,callback){
/* movieName = "SpiderMan
callback = function playMovie(){
} */
    console.log(`Checking the movie name:`);
    console.log(`Run the advertisement while fetching from the server`)
    


    setTimeout(()=>{
        console.log("Movie "+movieName+"is available");
     callback()        
    },2000)    


}



function playMovie(){
console.log("Now playwing the Movie");
}


checkAvailabilty("SpiderMan",playMovie)


function add (a,b,subtract){
    const sum = a + b
    console.log(sum);
    subtract ()
    
}

function subtract(c) {
    console.log("After subtract : ", c-5);
    
}

add (10,20,subtract)