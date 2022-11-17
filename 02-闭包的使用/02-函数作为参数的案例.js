function calc(num1, num2, calcFn) {
    console.log(calcFn(num1, num2));
}

function add(num1, num2) {
    return num1 + num2
}

function sub(num1, num2) {
    return num1 - num2
}
function mul(num1, num2) {
    return num1 * num2
}
function exc(num1, num2) {
    return num1 / num2
}

calc(10, 2, exc)