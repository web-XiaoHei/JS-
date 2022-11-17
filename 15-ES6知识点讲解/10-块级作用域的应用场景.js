const buttonArr = document.getElementsByClassName('btn')
console.log(buttonArr);
// for (var i = 0; i < buttonArr.length; i++) {
//     (
//         function (n) {
//             buttonArr[i].onclick = () => {
//                 console.log("第" + (n + 1) + "个按钮点击");
//             }
//         }
//     )(i)
// }

for (let i = 0; i < buttonArr.length; i++) {
    buttonArr[i].onclick = () => {
        console.log("第" + (i + 1) + "个按钮点击");
    }
}