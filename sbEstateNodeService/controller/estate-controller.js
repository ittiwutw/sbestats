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

function saveEstate(req){
    return new Promise((resolve, reject) => {
        try {
            estateService.saveEstate(req.body, (err, rows) => {
                resolve(rows);
            });
        } catch (error) {
            reject(error);
        }
    });
};

function searchEstate(req){
    return new Promise((resolve, reject) => {
        try {
            estateService.searchEstate(req.body, (err, rows) => {
                resolve(rows);
            });
        } catch (error) {
            reject(error);
        }
    });
};

function updateEstate(req){
    return new Promise((resolve, reject) => {
        try {
            estateService.updateEstate(req.body, (err, rows) => {
                resolve(rows);
            });
        } catch (error) {
            reject(error);
        }
    });
};

function deleteEstate(req){
    return new Promise((resolve, reject) => {
        try {
            estateService.deleteEstate(req.body, (err, rows) => {
                resolve(rows);
            });
        } catch (error) {
            reject(error);
        }
    });
};

var estateConst = {
    getEstate: getEstate,
    saveEstate: saveEstate,
    searchEstate: searchEstate,
    updateEstate: updateEstate,
    deleteEstate: deleteEstate
}

module.exports = estateConst;