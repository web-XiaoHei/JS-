var formParams = {
    a: "4",
    b: "5",
    c: "6",
    x: "12",
    y: "2",
    z: "3"
}

var fParamsNumber = {
    'grpl.gReal[4]': "",
    'grpl.gReal[5]': "",
    'grpl.gReal[6]': "",
    'grpl.gReal[7]': "",
    'grpl.gReal[8]': "",
    'grpl.gReal[9]': ""
}


var arr = []
function getnewArr(keyArr, valueArr) {
    var obj = {}
    keyArr.map((v, i) => {
        obj[keyArr[i]] = valueArr[i]
    })
    for (let i in obj) {
        let o = {}
        o[i] = obj[i]
        arr.push(o)
    }
    return arr
}

getnewArr(Object.keys(fParamsNumber), Object.values(formParams))