var express = require('express');
var cors = require('cors')
var userController = require('../controller/user-controller');
var estateController = require('../controller/estate-controller');


const router = express();
router.use(cors());
router.options('*', cors());

router.post('/registerUser', (req, res) => {
    userController.registerUser(req).then(rows => {
        res.json(rows)
    })
});

router.post('/login', (req, res) => {
    userController.login(req).then(rows => {
        res.json(rows)
    })
});

router.post('/getEstate', (req, res) => {
    estateController.getEstate(req).then(rows => {
        res.json(rows)
    })
});

router.post('/saveEstate', (req, res) => {
    estateController.saveEstate(req).then(rows => {
        res.json(rows)
    })
});

router.post('/searchEstate', (req, res) => {
    estateController.searchEstate(req).then(rows => {
        res.json(rows)
    })
});

router.post('/updateEstate', (req, res) => {
    estateController.updateEstate(req).then(rows => {
        res.json(rows)
    })
});

router.post('/deleteEstate', (req, res) => {
    estateController.deleteEstate(req).then(rows => {
        res.json(rows)
    })
});

module.exports = router;