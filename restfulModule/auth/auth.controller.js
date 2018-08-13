const Auth = require('../../DesignLayer/Auth/Auth');
const User = require('./auth.schema');

const login = async (req, res) => {
    try { 
        const auth = new Auth(req, res, User);
        await auth.registerLocal();
    } catch (error) {
        console.log(error);
        await res.status(400).send({ error })
    }      
}

const register = async (req, res) => {
    try { 
        
    } catch (error) {
        console.log(error);
        await res.status(400).send({ error })
    }      
}



module.exports = {
    login,
    register,

}