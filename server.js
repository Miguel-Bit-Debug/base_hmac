const sha256 = require("crypto-js/sha256");
const secrtKey = "687459c589a5798126987a1583C5689"

let body = "Hello world"
let hashServer = sha256(body + secrtKey).toString()
let hashClient = "ce8fb0895f25e5908f9d6a59b854973be179f2c98995a61791791a604c7e19e4"

let hashServerEqualsHashClient = hashServer == hashClient

console.log(hashServerEqualsHashClient)