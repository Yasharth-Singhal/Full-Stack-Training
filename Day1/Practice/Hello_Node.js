const data = require("fs")

data.writeFileSync("Day1/Practice/hello.txt","Hello Node js")

const readData = data.readFileSync("Day1/Practice/hello.txt","utf-8")

console.log(readData)

data.appendFileSync("Day1/Practice/hello.txt"," - Practice makes perfect")

const readData1 = data.readFileSync("Day1/Practice/hello.txt","utf-8")

console.log(readData1)