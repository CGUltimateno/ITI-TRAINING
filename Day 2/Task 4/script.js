function Student(faculty){
    switch (faculty) {
        case "FIC":
            console.log("You’re eligible to Programing tracks");
break;
        case "Engineering":
            console.log("You’re eligible to Networks and Embedded tracks");
break;
        case "Commerce":
            console.log("You’re eligible to ERP and Social Media tracks");
break;
        default:
            console.log("You’re  eligible to SW Fundamental track");
    }

}
let test = prompt("Enter your faculty");
console.log(Student(test));