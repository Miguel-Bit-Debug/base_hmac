const sha256 = require("crypto-js/sha256");
let secretKey = "687459c589a5798126987a1583C5689"

let msg = "hello world"
let hash = sha256(msg + secretKey).toString()

console.log(hash)
// let timeStamp = Math.floor(Date.now() / 1000)