const userService = require("../service/user-service");

function registerUser(req){
    return new Promise((resolve, reject) => {
        try {
            userService.registerUser(req.body, (err, rows) => {
                resolve(rows);
            });
        } catch (error) {
            reject(error);
        }
    });
};

function login(req){
    return new Promise((resolve, reject) => {
        try {
            userService.login(req.body, (err, rows) => {
                resolve(rows);
            });
        } catch (error) {
            reject(error);
        }
    });
};

var userConst = {
    registerUser:registerUser,
    login:login
}

module.exports = userConst;