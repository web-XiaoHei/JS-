let sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce((previousValue, currentValue) => {
    return previousValue + currentValue.x
}, 0)

console.log(sum);