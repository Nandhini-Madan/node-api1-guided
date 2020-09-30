// This 'require'syntax is another way to import a third party library
const fs=require("fs")

//make a new folder called data
fs.mkdirSync("data")

//For loop for creating alphabets

for (let i=97;i<=122;i++){
const letter =String.fromCharCode(i)
fs.mkdirSync(`data/${letter}`)
}