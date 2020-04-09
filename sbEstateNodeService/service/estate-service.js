var _estateRepo = require("../repository/estate-repository");
var _coreFunc = require("./coreFunction");

async function getEstate(param, callback) {
  var data = await _estateRepo.getEstate(param);

  callback("", {
    response_code: "0000",
    response_description: "SUCCESS",
    data,
  });

  return;
}

async function getEstateImg(estateId) {
  var imgs = await _estateRepo.getEstateImgByEstateId(estateId);

  return imgs;
}

async function saveEstate(param, callback) {
  param.createDate = new Date().toMysqlFormat();
  var data = await _estateRepo.saveEstate(param);

  callback("", {
    response_code: "0000",
    response_description: "SUCCESS",
  });

  return;
}

async function searchEstate(param, callback) {
  var data = await _estateRepo.searchEstate(param);

  if (data.result.length > 0) {
    callback("", {
      response_code: "0000",
      response_description: "SUCCESS",
      data,
    });
  } else {
    callback("", {
      response_code: "0001",
      response_description: "ไม่พบข้อมูล"
    });
  }

  return;
}

var estateService = {
  getEstate: getEstate,
  getEstateImg: getEstateImg,
  saveEstate: saveEstate,
  searchEstate: searchEstate,
};

module.exports = estateService;
