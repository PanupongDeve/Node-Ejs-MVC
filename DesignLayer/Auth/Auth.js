const Local = require('./Local');

module.exports = class Auth {
    constructor() {
        this.local = new Local();
    }
}