var _db = require('./db');

async function registerUser(param) {

    let sqlStr = "INSERT INTO user (email, password , name , phoneNo, createDate) VALUES " +
        " ( '" + param.email + "' , '" + param.password + "' , '" + param.name + "' , '" + param.phoneNo + "', '" + param.createDate + "')";
        console.log("sqlStr : ", sqlStr);
        let res = _db.insertdata(sqlStr);

        _db.updatedata(sqlStrIncrement);

    return res;
}

async function findUser(email) {

    let sqlStr = "SELECT * FROM user WHERE email = '" + email + "'";
    console.log("sqlStr : ", sqlStr);
    let res = await _db.selectData(sqlStr);
    console.log("result findUser: ",res);

    return res;
}

async function findUserByUserId(userid) {

    let sqlStr = "SELECT * FROM user WHERE userId = '" + userid + "'";
    console.log("sqlStr : ", sqlStr);
    let res = await _db.selectData(sqlStr);
    console.log("result findUser: ",res);

    return res;
}

async function updateUser(param) {
    let sqlStr = "UPDATE user SET firstName = '" + param.firstName +  "' , lastName = '" + param.lastName 
    +"' , address = '" + param.address +  "' , subDistrict = '" + param.subDistrict +  "' , district = '" + param.district+  "' , province = '" + param.province+  "' , postcode = '" + param.postcode+ "', gender = '" 
    + param.gender + "', age = '" + param.age + "', phoneNo = '" + param.phoneNo + "', bankName = '" + param.bankName + "', accountNo = '" + param.accountNo  +"', updateDate = '" + param.updateDate  + "' WHERE username = '" + param.username + "'  ";
    let res = _db.updatedata(sqlStr);
    return res;
}

async function upgradeLevel(param) {
    let sqlStr = "UPDATE user SET level = '" + param.level + "' , point = '" + param.point +"' WHERE username = '" + param.username + "'  " ;
    let res = _db.updatedata(sqlStr);
    return res;
}

async function login(param) {
    let sqlStr = "SELECT * FROM user WHERE email = '" + param.email + "' AND password = '" + param.password + "'";
    console.log("sqlStr : ", sqlStr);
    let res = await _db.selectData(sqlStr);
    console.log("result : ",res);
   
    return res   
    ;
}

async function getRunnningNumber() {
    let sqlStr = "SELECT * FROM runningNumber WHERE type = '" + "userid" + "'";
    console.log("sqlStr : ", sqlStr);
    let res = await _db.selectData(sqlStr);
    console.log("result : ",res);
   
    return res   
    ;
}


let registUser = {
    registerUser: registerUser,
    updateUser: updateUser,
    upgradeLevel: upgradeLevel,
    login: login,
    findUser: findUser,
    getRunnningNumber: getRunnningNumber,
    findUserByUserId: findUserByUserId

}

module.exports = registUser;