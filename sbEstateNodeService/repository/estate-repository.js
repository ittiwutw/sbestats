var _db = require('./db');

async function getEstate(email) {

    let sqlStr = "SELECT * FROM estate";
    console.log("sqlStr : ", sqlStr);
    let res = await _db.selectData(sqlStr);
    console.log("result findUser: ",res);

    return res;
}

let estateRepo = {
    getEstate: getEstate
}

module.exports = estateRepo;