// 'use strict';

// var crypto = require('crypto'),
//     algorithm = 'aes-256-ctr',
//     testing = 'thisisatest';
//
//
// const encrypt = (text) => {
//     return new Promise(resolve => {
//         var cipher = crypto.createCipher(algorithm, testing)
//         var crypted = cipher.update(text, 'utf8', 'hex')
//         crypted += cipher.final('hex');
//     resolve(crypted);
// });
// }
//
// module.exports = encrypt;

// const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY; // Must be 256 bytes (32 characters)
// const IV_LENGTH = 16; // For AES, this is always 16

// function encrypt(text) {
//     let iv = crypto.randomBytes(IV_LENGTH);
//     let cipher = crypto.createCipheriv('aes-256-cbc', new Buffer(CONFIG.encryption_key), iv);
//     let encrypted = cipher.update(text);
//
//     encrypted = Buffer.concat([encrypted, cipher.final()]);
//
//     return iv.toString('hex') + ':' + encrypted.toString('hex');
// }
//
// // const cipher = crypto.createCipher('aes192', 'a password');
// //
// // let encrypted = '';
// // cipher.on('readable', () => {
// //     const data = cipher.read();
// // if (data)
// //     encrypted += data.toString('hex');
// // });
// // cipher.on('end', () => {
// //     console.log(encrypted);
// // // Prints: ca981be48e90867604588e75d04feabb63cc007a8f8ad89b10616ed84d815504
// // });
// //
// // cipher.write('some clear text data');
// // cipher.end();
// function encrypt(text) {
//     const secret = text;
//     const hash = crypto.createHmac('sha256', secret)
//         .update('I love cupcakes')
//         .digest('hex');
//     return hash;
// }

// function decrypt(text) {
//     let textParts = text.split(':');
//     let iv = new Buffer(textParts.shift(), 'hex');
//     let encryptedText = new Buffer(textParts.join(':'), 'hex');
//     let decipher = crypto.createDecipheriv('aes-256-cbc', new Buffer(CONFIG.encryption_key), iv);
//     let decrypted = decipher.update(encryptedText);
//
//     decrypted = Buffer.concat([decrypted, decipher.final()]);
//
//     return decrypted.toString();
// }
//
// module.exports = decrypt;