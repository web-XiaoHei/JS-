var obj = {
    name: 'why',
    age: 19
}
Object.defineProperty(obj, "address", {
    enumerable: false,
    value: '北京市'
})

console.log(obj);