var _userRepo = require("../repository/user-repository");
var _coreFunc = require("./coreFunction");

async function registerUser(param, callback) {
  // param.number = _coreFunc.escapSQLFunction(param.number);
  console.log(param);
  param.email = _coreFunc.escapSQLFunction(param.email);

  let leng = await _userRepo.findUser(param.email);
  if (leng.result.length == 0) {
    param.password = _coreFunc.escapSQLFunction(param.password);
    param.firstName = _coreFunc.escapSQLFunction(param.name);
    param.phoneNo = _coreFunc.escapSQLFunction(param.phoneNo);
    param.createDate = new Date().toMysqlFormat();

    var res = _userRepo.registerUser(param);

    callback("", { response_code: "0000", response_description: "SUCCESS" });
  } else {
    callback("", {
      response_code: "0001",
      response_description: "USERNAME ALREADY EXISTS"
    });
  }
  return;
}

async function login(param, callback) {
  var data = await _userRepo.login(param);

  if (data.result.length > 0) {
    callback("", {
      response_code: "0000",
      response_description: "SUCCESS",
      data
    });
  } else {
    callback("", {
      response_code: "0001",
      response_description: "INVALID USERNAME/PASSWORD"
    });
  }

  return;
}

var userService = {
  registerUser: registerUser,
  login: login
};

module.exports = userService;
