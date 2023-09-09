alert("Welcome to my website")
let firstname = prompt("Enter your first name")
let welcome =  document.createTextNode("Hello " + firstname + " ")

console.log(firstname);

let h1 = document.createElement("h1");
h1.appendChild(welcome);
document.body.appendChild(h1);