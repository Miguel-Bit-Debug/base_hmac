const CryptoJS = require('crypto-js')

let sharedKey = "452e2216-e603-46f4-bc20-c593a2565e0c"

let requestMethod = "POST"

let requestUri = "http://localhost"

let timeStamp = Math.floor(Date.now() / 1000)

let nonce = ""

for(let i = 0; i< 32; i++) {
    nonce += Math.floor(Math.random()* 0xF).toString(0xF)
}

let requestContentBodyHash = ""
let requestContentBase64 = ""
let requestBody = '{"name":"teste"}'

if(requestBody != "") {
    let bodyBytes = CryptoJS.enc.Utf8.parse(requestBody)
    requestContentBodyHash = CryptoJS.SHA256(bodyBytes)
    requestContentBase64 = CryptoJS.enc.Base64.stringify(requestContentBodyHash)
}

let signatureRawData = `${requestMethod}${requestUri}${timeStamp}${nonce}${requestContentBase64}`
let payloadBytes = CryptoJS.enc.Utf8.parse(signatureRawData)
let secretKeyBytes = CryptoJS.enc.Utf8.parse(sharedKey)
let signatureBytes = CryptoJS.HmacSHA256(payloadBytes, secretKeyBytes)
let requestSignatureBase64String = CryptoJS.enc.Base64.stringify(signatureBytes)

let hmacToken = `${requestSignatureBase64String}:${nonce}:${timeStamp}`

console.log(hmacToken);