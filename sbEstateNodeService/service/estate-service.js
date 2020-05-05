var _estateRepo = require("../repository/estate-repository");
var _coreFunc = require("./coreFunction");
var fs = require("fs");
var host = "https://sbestate.yuzudigital.com/";

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
  if (!fs.existsSync("estate")) {
    fs.mkdirSync("estate");
  }
  if (param.imgUrl.length > 0) {
    var base64Data = param.imgUrl.replace(/^data:image\/png;base64,/, "");
    fs.writeFile("estate/" + makeid(5) + ".png", base64Data, "base64", function (
      err
    ) {});
    param.imgUrl = host + "estate/" + makeid(5) + ".png";
  }

  if (param.deedImg.length > 0) {
    var base64Data = param.deedImg.replace(/^data:image\/png;base64,/, "");
    fs.writeFile("estate/" + makeid(5) + ".png", base64Data, "base64", function (
      err
    ) {});
    param.deedImg = host + "estate/" + makeid(5) + ".png";
  }

  if (param.landImg.length > 0) {
    var base64Data = param.landImg.replace(/^data:image\/png;base64,/, "");
    fs.writeFile("estate/" + makeid(5) + ".png", base64Data, "base64", function (
      err
    ) {});
    param.landImg = host + "estate/" + makeid(5) + ".png";
  }

  if (param.positionImg.length > 0) {
    var base64Data = param.positionImg.replace(/^data:image\/png;base64,/, "");
    fs.writeFile("estate/" + makeid(5) + ".png", base64Data, "base64", function (
      err
    ) {});
    param.positionImg = host + "estate/" + makeid(5) + ".png";
  }

  param.createDate = new Date().toMysqlFormat();
  var data = await _estateRepo.saveEstate(param);

  callback("", {
    response_code: "0000",
    response_description: "SUCCESS",
  });

  return;
}

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

async function updateEstate(param, callback) {
  param.createDate = new Date().toMysqlFormat();
  var data = await _estateRepo.updateEstate(param);

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

async function deleteEstate(param, callback) {
  var data = await _estateRepo.deleteEstate(param);

  callback("", {
    response_code: "0000",
    response_description: "SUCCESS",
  });

  return;
}

var estateService = {
  getEstate: getEstate,
  getEstateImg: getEstateImg,
  saveEstate: saveEstate,
  searchEstate: searchEstate,
  updateEstate: updateEstate,
  deleteEstate: deleteEstate
};

module.exports = estateService;
