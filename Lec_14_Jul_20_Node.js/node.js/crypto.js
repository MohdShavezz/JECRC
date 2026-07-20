import crypto from 'crypto'

//create hash 
// let secureData='Password@1234'
// let hash=crypto.createHash('sha256')
// hash.update(secureData)
// console.log(hash.digest('hex'))

// crypto.randomBytes(16,(err,buf)=>{
//     if(err) throw err;
//     console.log(buf.toString('hex'))
// })

const algorithm='aes-256-cbc'
const secretKey=crypto.randomBytes(32) // 32 bytes for aes-256
const iv=  crypto.randomBytes(16) // 16 bytes for aes-256-cbc


function encrypt(text) {
    let cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return {
        iv: iv.toString('hex'),
        content: encrypted
    };
}

function decrypt(encrypted) {
    let decipher = crypto.createDecipheriv(algorithm, secretKey, iv);

    let decrypted = decipher.update(encrypted.content, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
}

const encryptedData = encrypt('password');
console.log(encryptedData);

const decryptedData = decrypt(encryptedData);
console.log(decryptedData);