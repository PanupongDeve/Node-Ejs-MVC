const bcrypt   = require('bcrypt-nodejs');


module.exports = class Local {
    constructor(User) {
        this.User = User;
        this.bcrypt = bcrypt;
    }

    generateHash(password) {
        return this.bcrypt.hashSync(password, this.bcrypt.genSaltSync(8), null);
    }

    validPassword(password, passwordDB) {
        return this.bcrypt.compareSync(password, passwordDB);
    }

    userDTO(user) {
        return {
            email: user.email
        }
    }

    async existingUser(user) {
        let existUser = false;
        const request = { 'local.email': user.email};
        
        const users = await this.User.find(request);
    
        if(users.length > 0) {
            existUser = true;
        }
        return existUser
    }

    async checkUser(user) {
        
        let userUndefind = false;
        const request = {'local.email': user.email};

        const users = await this.User.find(request);
        if(users.length === 0) {
            userUndefind = true;
        }

        return userUndefind;
    }

    async userRegister(user) {
        
        const userSaveDB = {
            local: {
                email: user.email,
                password: this.generateHash(user.password)
            }
        }
        
        const userRegistered = await this.User.create(userSaveDB)
        
        return userRegistered.local;
    }

    async userLogin(user) {
        const request = {'local.email': user.email};

        const userLoggin = await this.User.findOne(request);
        return userLoggin.local;

    }

}