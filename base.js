const CryptoJS = require('crypto-js')

let sharedKey = "9433172a-1198-4a9e-a807-11f7729d9a73"

let requestContentBodyHash = ""
let requestContentBase64 = ""
let requestBody = '{"name":"gerwgvfer","price":"3242"}'

if(requestBody != "") {
    let bodyBytes = CryptoJS.enc.Utf8.parse(requestBody)
    requestContentBodyHash = CryptoJS.SHA256(bodyBytes)
    requestContentBase64 = CryptoJS.enc.Base64.stringify(requestContentBodyHash)
}

let payloadBytes = CryptoJS.enc.Utf8.parse(requestContentBase64)
let secretKeyBytes = CryptoJS.enc.Utf8.parse(sharedKey)
let signatureBytes = CryptoJS.HmacSHA256(payloadBytes, secretKeyBytes)

let requestSignatureBase64String = CryptoJS.enc.Base64.stringify(signatureBytes)

console.log(requestSignatureBase64String);