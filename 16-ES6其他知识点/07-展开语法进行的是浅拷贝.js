const info = {
    name: 'why',
    friend: { name: 'kobe' }
}

const obj = { ...info }
// console.log(obj);

obj.friend.name = 'coderwhy'
console.log(info.friend.name);// coderwhy

obj.name = '123'
console.log(info.name);// why