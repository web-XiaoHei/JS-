var flattened1 = [[0, 1], [2, 3], [4, 5]].reduce((acc, cur) => {
    return acc.concat(cur)
}, [])

console.log(flattened1);

var flattened2 = [[1, [2, 8]], [3, 4, 9], [5, [6, 10]]]
function fn(arr) {
    return arr.reduce((acc, cur) => {
        return acc.concat(Array.isArray(cur) ? fn(cur) : cur)
    }, [])
}

console.log(fn(flattened2));