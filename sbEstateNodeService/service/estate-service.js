var _estateRepo = require("../repository/estate-repository");
var _coreFunc = require("./coreFunction");

async function getEstate(param, callback) {
  var data = await _estateRepo.getEstate(param);

  callback("", {
    response_code: "0000",
    response_description: "SUCCESS",
    data
  });

  return;
}

var estateService = {
  getEstate: getEstate
};

module.exports = estateService;
