const { Router } = require("express");

const getDrivers = require('./../controllers/getDrivers');
const getDriverById = require('./../controllers/getDriverById');
const getDriversByName = require('./../controllers/getDriversByName');
const getTeams = require('./../controllers/getTeams');
const postDrivers = require('./../controllers/postDrivers');

const router = Router();

router.get('/drivers',getDrivers);
router.get('/drivers/search', getDriversByName);
router.get('/drivers/:idDriver', getDriverById);
router.get('/teams',getTeams);
router.post('/drivers', postDrivers);

module.exports = router;
