var nums = [10, 5, 11, 100, 55]

var newNums = []
// nums.map(item => {
//     return (item % 2 === 0)
// })
// newNums = nums.filter(function (item) {
//     return (item % 2 === 0)
// })
// newNums = nums.filter(item => item % 2 == 0)
var newNums2 = []
nums.forEach(function (item) {
    if (item % 2 === 0) {
        newNums2.push(item)
    }
})
var newNums3 = 0
newNums3 = nums.find(item => item % 2 == 0)

console.log(newNums, 'newNums');
console.log(nums, 'nums');
console.log(newNums2, 'newNums2');
console.log(newNums3, 'newNums3');
