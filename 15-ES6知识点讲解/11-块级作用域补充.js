const names = ["abc", "cba", "nba"]

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

{
    var i = 0
    console.log(names[i]);
}

{
    var i = 0
    // let i = 0
    console.log(names[i]);
}