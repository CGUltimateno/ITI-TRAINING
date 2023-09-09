
function sum(num1, num2){
    return num1 + num2;
}
console.log(sum(5, 10));

let button = document.getElementById('btn');
button.addEventListener('click', function(){
    let num1 = parseInt(prompt('Enter first number'));
    let num2 = parseInt(prompt('Enter second number'));
    let res = sum(num1, num2);
    console.log(res);
});

