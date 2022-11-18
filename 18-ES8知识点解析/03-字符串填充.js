const message = "Hello World"

const newMessage = message.padStart(15, '*').padEnd(20, "-")
console.log(newMessage, newMessage.length);//****Hello World----- 20

// 案例
const cardNumber = "3333312123434234234"

const lastFourCard = cardNumber.slice(-4).padStart(cardNumber.length, "*")
console.log(lastFourCard);