var _db = require("./db");

async function getEstate() {
  let sqlStr = "SELECT * FROM estate";
  console.log("sqlStr : ", sqlStr);

  let res = await _db.selectData(sqlStr);
  console.log("result findUser: ", res);

  for (var i = 0; i < res.result.length; i++) {
    let sqlStrImg = `SELECT * FROM estateImg WHERE estateId = ${res.result[i].id} `;
    console.log("sqlStrImg : ", sqlStrImg);
    let resImgs = await _db.selectData(sqlStrImg);
    console.log("result imgs: ", resImgs);
    res.result[i].imgs = resImgs.result;
  }
  

  return res;
}

async function getEstateImgByEstateId(estateId) {
  let sqlStr = `SELECT * FROM estateImg WHERE estateId = ${estateId} `;
  console.log("sqlStr : ", sqlStr);
  let res = await _db.selectData(sqlStr);
  console.log("result findUser: ", res);

  return res;
}

async function saveEstate(param) {
  sqlStr = `INSERT INTO estate (estateType, sellType, name, detail, price, area, imgUrl, lat, lng, statusFlg, createDate, userId)
     VALUES (
        '${param.estateType}'
       , '${param.sellType}'
       , '${param.name}'
       , '${param.detail}'
       , '${param.price}'
       , '${param.area}'
       , '${param.imgUrl}'
       , '${param.lat}'
       , '${param.lng}'
       , '${param.statusFlg}'
       , '${createDate}'
       , '${param.userId}'
    )  `;
  console.log("sqlStr : ", sqlStr);
  let res = await _db.insertdata(sqlStr);
  console.log("result insert data: ", res);

  return res;
}

let estateRepo = {
  getEstate: getEstate,
  getEstateImgByEstateId: getEstateImgByEstateId,
  saveEstate: saveEstate
};

module.exports = estateRepo;
