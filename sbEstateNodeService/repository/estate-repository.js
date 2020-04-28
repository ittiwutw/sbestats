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
  sqlStr = `INSERT INTO estate (estateType, sellType, name, detail, price, province, imgUrl, lat, lng, statusFlg, createDate, userId, district, 
    rai, ngan, wa, tel, deedImg, landImg, positionImg)
     VALUES (
        '${param.estateType}'
       , '${param.sellType}'
       , '${param.name}'
       , '${param.detail}'
       , '${param.price}'
       , '${param.province}'
       , '${param.imgUrl}'
       , '${param.lat}'
       , '${param.lng}'
       , '${param.statusFlg}'
       , '${param.createDate}'
       , '${param.userId}'
       , '${param.district}'
       , '${param.rai}'
       , '${param.ngan}'
       , '${param.wa}'
       , '${param.tel}'
       , '${param.deedImg}'
       , '${param.landImg}'
       , '${param.positionImg}'
    )  `;
  console.log("sqlStr : ", sqlStr);
  let res = await _db.insertdata(sqlStr);
  console.log("result insert data: ", res);

  return res;
}

async function updateEstate(param) {
  sqlStr = `UPDATE estate
    SET 
       estateType = '${param.estateType}'
       ,sellType = '${param.sellType}'
       ,name = '${param.name}'
       ,detail = '${param.detail}'
       ,price = '${param.price}'
       ,province = '${param.province}'
       ,imgUrl = '${param.imgUrl}'
       ,lat = '${param.lat}'
       ,lng = '${param.lng}'
       ,statusFlg = '${param.statusFlg}'
       ,createDate = '${param.createDate}'
       ,district = '${param.district}'
       ,rai = '${param.rai}'
       ,ngan = '${param.ngan}'
       ,wa = '${param.wa}'
       ,tel = '${param.tel}'
       ,deedImg = '${param.deedImg}'
       ,landImg = '${param.landImg}'
       ,positionImg = '${param.positionImg}'
       where id = ${param.id} `;

  console.log("sqlStr : ", sqlStr);
  let res = await _db.updatedata(sqlStr);
  console.log("result insert data: ", res);

  return res;
}

async function searchEstate(param) {
  let whereSellType = '';
  if(param.sellType){
    whereSellType = `AND sellType = '${param.sellType}' `;
  }
  let sqlStr = `SELECT * FROM estate WHERE name LIKE '%${param.name}%' ${whereSellType}`;
  console.log("sqlStr : ", sqlStr);

  let res = await _db.selectData(sqlStr);
  console.log("result findUser: ", res);

  for (var i = 0; i < res.result.length; i++) {
    let sqlStrImg = `SELECT * FROM estateImg WHERE estateId = ${res.result[i].id}`;
    console.log("sqlStrImg : ", sqlStrImg);
    let resImgs = await _db.selectData(sqlStrImg);
    console.log("result imgs: ", resImgs);
    res.result[i].imgs = resImgs.result;
  }
  

  return res;
}

async function deleteEstate(param) {
  sqlStr = `DELETE FROM estate where id = ${param.id} `;

  console.log("sqlStr : ", sqlStr);
  let res = await _db.deletedata(sqlStr);
  console.log("result insert data: ", res);

  return res;
}

let estateRepo = {
  getEstate: getEstate,
  getEstateImgByEstateId: getEstateImgByEstateId,
  saveEstate: saveEstate,
  searchEstate: searchEstate,
  updateEstate: updateEstate,
  deleteEstate: deleteEstate
};

module.exports = estateRepo;
