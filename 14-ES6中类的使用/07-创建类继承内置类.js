// 继承系统的类并进行扩展
class Foo extends Array {
    firstItem() {
        return this[0]
    }
    lastItem() {
        return this[this.length - 1]
    }
}

var arr = new Foo(1, 2, 3)

console.log(arr.firstItem());
console.log(arr.lastItem());