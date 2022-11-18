const obj = {
    name: 'why',
    age: 18
}
const objProxy = new Proxy(obj, {
    get(target, key, receiver) {
        console.log('get--------');
        return Reflect.get(target, key)
    },
    set(target, key, newValue, receiver) {
        console.log('set---------');
        value = target[key]
        const result = Reflect.set(target, key, newValue)
        if (result) {
            return value
        } else {

        }

    }
})

objProxy.name = 'coderwhy'
console.log(objProxy.name);