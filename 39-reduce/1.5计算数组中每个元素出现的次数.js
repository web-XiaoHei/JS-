const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
let countedNames = names.reduce(function (allNames, name) {
    // debugger
    if (name in allNames) {
        allNames[name]++
    } else {
        allNames[name] = 1
    }

    return allNames
}, {})
console.log(countedNames);