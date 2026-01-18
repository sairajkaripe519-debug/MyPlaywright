function playMovie() {
console.log("Now playwing the Movie");
}


 console.log (checkAvailabilty ("SpiderMan" , playMovie) )


function add (a,b,subtract){
    const sum = a + b
    console.log(sum);
    subtract ()
    
}

function subtract(c) {
    console.log("After subtract : ", c-5);
    
}

add (10,20,subtract)