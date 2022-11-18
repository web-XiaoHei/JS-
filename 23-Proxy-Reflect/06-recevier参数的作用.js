const obj = {
    _name: 'why',
    get name() {
        return this._name
    },
    set name(newName) {
        this._name = newName
    }
}

const objProxy = new Proxy(obj, {
    get(target, key, receiver) {
        // receiver是创建出的代理对象
        console.log(receiver, 'receiver');
        console.log(receiver === objProxy); //true
        return Reflect.get(target, key, receiver)
    },
    set(target, key, newValue, receiver) {
        Reflect.set(target, key, newValue, receiver)
    }
})

// obj.name = 'kobe'
console.log(objProxy.name);