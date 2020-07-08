// author: Aksenov Andrey
const https = require('https')

const data = "https://raw.githubusercontent.com/aksenof/aksenof.github.io/blob/master/kodaktor/Crypto/message"

const options = {
    hostname: 'fork.kodaktor.ru',
    port: 443,
    path: '/mystery?aksenof',
    method: 'POST',
    headers: {
        'Content-Type': 'multipart/form-data',
        'Content-Length': data.length
    }
}
const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.error(error)
})

req.write(data)
req.end()
const request = require(`request-promise-native`);
const url = `https://fork.kodaktor.ru/mystery?aksenof`

request.post(url, {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
}, ((error, response, body) => 'https://raw.githubusercontent.com/aksenof/aksenof.github.io/blob/master/kodaktor/Crypto/message'))
    .then((response) => console.log(response));
