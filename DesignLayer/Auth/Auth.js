const Local = require('./Local');
const Token = require('./Token');

module.exports = class Auth {
    constructor(req, res, User) {
        this.req = req;
        this.res = res;
        this.local = new Local(User);
        this.token = new Token(this.req, this.res);
    }

    async registerLocal() {
        try {
            const user = {
                email: this.req.email,
                password: this.req.password
            }

            if(await this.local.existingUser(user)) {
                throw "email is existing";
            }

            const secretServer = this.token.getSecretKeyServer();
            const userRegistered = await this.local.userRegister(user);
            const userObject = this.local.userDTO(userRegistered);

            const data_to_token = {
                user: userRegistered,
                secret: secretServer
            }

            const token = this.token.generateToken(data_to_token);

            this.res.send({
                user: userObject,
                token
            })

            
        } catch (error) {
          await res.status(400).send({ error })
        }

    }

    async loginLocal() {

    }
}