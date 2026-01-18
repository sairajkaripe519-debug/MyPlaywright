let course = "Playwright"

let outputslice = course.slice(2,5)


let outslice = course.slice(5,3)
console.log(outputslice);
console.log(outslice);



let outputslice2 = course.slice(-6)

console.log(outputslice2);

let filename = "document.pdf"

let extslice = filename.slice(-3)
console.log(extslice);

let sbstrcrs = course.substring(4,-2)

console.log(sbstrcrs);
 
let outputsubstring1 = course.substring(3,5)

let outputsubstring2 = course.substring(5,3)

let outputsubstring3 = course.substring(4,-3)

console.log(outputsubstring1);
console.log(outputsubstring2);
console.log(outputsubstring3);



function add(a,b,c) {
    let z = a + b + c
    return z
}

console.log(add(10,20,30));