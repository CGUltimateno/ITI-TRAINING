
function lessThanOrEqualToZero(a){
    if (a <= 0){
        return false;
    }
    else{
        return true;
    }
}
let test = prompt("Enter a number: ");
test = lessThanOrEqualToZero(test);
console.log(test);
