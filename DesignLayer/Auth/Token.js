const jwt = require('jsonwebtoken');

const keyToken = 'client-App';
const secretKeyServer = 'client-App-secret';

module.exports = class Token {
    constructor(req, res) {
        this.req = req;
        this.res = res;
        this.keyToken = keyToken;
        this.secretKeyServer = secretKeyServer;
    }

    getSecretKeyServer() {
        return this.secretKeyServer;
    }

    generateToken(data) {
        try {
            const  token = jwt.sign(JSON.stringify(data), keyToken);
            return token;
        } catch (error) {
            this.res.status(400).send({error});
        }
    }

    verifyToken(token) {
        try {
            const decoded = jwt.verify(token, keyToken);
            const secretKeyUser = decoded.secret;
            return secretKeyUser === this.secretKeyServer;
          } catch(err) {
            // err
            const messageError = {
                err,
                msgErr: 'Token fail'
            }
            
            this.res.status(400).send({messageError});
          }
    }
  
}

