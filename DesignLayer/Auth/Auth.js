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
                email: this.req.body.email,
                password: this.req.body.password
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
          await this.res.status(400).send({ error })
        }

    }

    async loginLocal() {
        try {
            const user = {
                email: this.req.body.email,
                password: this.req.body.password
            }

            if(await this.local.checkUser(user)) {
                throw "email invalid";
            }

            const secretServer = this.token.getSecretKeyServer();
            const userLoggin = await this.local.userLogin(user);

            if(!await this.local.validPassword(user.password, userLoggin.password)) {
                throw "password not true";
            }

            const userObject = this.local.userDTO(userLoggin);

            const data_to_token = {
                user: userLoggin,
                secret: secretServer
            }

            const token = this.token.generateToken(data_to_token);
           

            this.res.send({
                user: userObject,
                token
            })


        
        } catch (error) {
            await this.res.status(400).send({ error })
        }
    }
}