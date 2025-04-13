const accountId = 14456;
let accountEmail = "ms.dishaverma.20@gmail.com";
var accountPassword = "2345"
accountCity = "Jaipur"
let accountState;

// prefer not to use var because of issue in block scope and functional scope
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
// console table prints or give outputs in table structure form

// const ki value hamesha constant rahti hai and we can't change if we try to change then error a ajata hai
// bina let const use kre we can also reserve the memory but not good practice
// hum kisi variable ko undefined bhi chod sakte hai

// accountId = "hkajh"
// console.log(accountId)
// ctrl + / comment out kar deta hai chijo ko
accountEmail = "hover.@gmail.com"
console.log(accountEmail)