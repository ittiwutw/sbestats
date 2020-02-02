const estateService = require("../service/estate-service");

function getEstate(req){
    return new Promise((resolve, reject) => {
        try {
            estateService.getEstate(req.body, (err, rows) => {
                resolve(rows);
            });
        } catch (error) {
            reject(error);
        }
    });
};

var estateConst = {
    getEstate:getEstate
}

module.exports = estateConst;