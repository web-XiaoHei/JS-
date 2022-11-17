let arr = [
    {
        value: 45
    },
    {
        value: 88
    },
    {
        value: 101
    },
]
let newArr = arr.reduce((acc, cur) => {
    return acc + cur.value
}, 0)

console.log(newArr); // 234