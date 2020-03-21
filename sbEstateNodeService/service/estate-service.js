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

async function getEstateImg(estateId) {
    var imgs = await _estateRepo.getEstateImgByEstateId(estateId)
  

  return imgs;
}

async function saveEstate(param, callback) {
  param.createDate = new Date().toMysqlFormat();
  var data = await _estateRepo.saveEstate(param);
  
  callback("", {
    response_code: "0000",
    response_description: "SUCCESS"
  });

  return;
}

var estateService = {
  getEstate: getEstate,
  getEstateImg: getEstateImg,
  saveEstate: saveEstate
};

module.exports = estateService;
