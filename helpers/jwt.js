const jwt = require('jsonwebtoken');

const generaJWT = (uid) =>{

    return new Promise((resolve, reject) => {
        const payload = {uid};
        jwt.sign(payload,process.env.JWT_KEY, {
                expiresIn: '24h'
        },(err,token) => {
            if(err){
                // no se pudo crear el token
                reject('no se pudo generar el JWT');
            }else {
                resolve(token);                
            }
        });
    });
}

module.exports = {
    generaJWT
}