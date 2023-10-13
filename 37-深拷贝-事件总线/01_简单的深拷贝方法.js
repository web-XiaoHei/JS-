const s1 = Symbol()
const s2 = Symbol()
const obj = {
    name: 'why',
    friend: {
        name: 'kobe'
    },
    foo: function () {
        console.log("foo function");
    },
    [s1]: "abc",
    s2: s2
}

const info = JSON.parse(JSON.stringify(obj))
console.log(info === obj); // false
obj.friend.name = 'james'
console.log(obj, info);
