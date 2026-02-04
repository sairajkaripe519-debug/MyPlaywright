


// type SupportedBrowser = "chrome" | "firefox" | "msedge"



// function invokeBrowser(BrowserName : SupportedBrowser) { 

//     if (BrowserName === "chrome") {
//         console.log("Launch Chrome");
//     }else{
//         console.log("Firefox Browser");   
//     }
// }

// invokeBrowser("Safari");


// type paymentmode = "AmazonPay" | "Phonepe" | "GooglePay"

// function Payment(mode : paymentmode) {
//     if (mode === "AmazonPay") {
//         console.log("Payment is done using AmazonPay");
//     } else if (mode === "GooglePay") {
//         console.log("Payment is done using GooglePay");
//     } else if (mode === "Phonepe") {
//         console.log("Payment is done using Phonepe");        
//     } else {
//         console.log("Payment Not done");
        
//     }
// }

// Payment("AmazonPay");
// Payment("GooglePay");
// Payment("Phonepel");
// // Payment("Paypal");

// type paymentmode = "UPI" | "Creditcard" | "Paypal"

// function Payment(mode : paymentmode) {
//     if (mode === "UPI") {
//         console.log("Payment is done using UPI");
//     } else if (mode === "Creditcard") {
//         console.log("Payment is done using Creditcard");
//     } else if (mode === "Paypal") {
//         console.log("Payment is done using Paypal");        
//     } else {
//         console.log("Payment Not done");
        
//     }
// }

// Payment("UPI");
// Payment("Creditcard");
// Payment("Paypal");
// Payment("Cash")




// type LoginLocators = {
//     usernameInput : string,
//     PasswordInput : string

// }

// type LoginActions + {
//     loginbtn : string;
// }

// type  Loginpage : LoginLocators & LoginActions;
// const Loginpage : Loginpage = {
//     usernameInput : "#username",
//     PasswordInput : "#password",
//     Loginbt : ".submit"
// }

/* Intersection type */


type LoginLocators ={
    usernameInput : string,
    passwordInput : string
}


type LoginActions = {
    loginBtn : string
}


type LoginPage = LoginLocators & LoginActions;


const loginPage : LoginPage ={ // strictly we have fill both text box locators and button locator
 
 usernameInput : "#username",
 passwordInput:"#password",
 loginBtn:".submit"

}

type Admin = {
adminName : string,
privileges : string[]
}


type Employee = {
    name : string,
    empId : number,
    date: string
}

type QA = Admin & Employee

const QAProfile : QA ={
    adminName : "Testleaf",
    privileges : ['server'],
    name:"Ravindran",
    empId : 1001,
    date: "31/01/26"
}


console.log(QAProfile.adminName);
console.log(QAProfile.date);