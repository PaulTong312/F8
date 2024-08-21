const express = require('express');
const app = express();
const router = express.Router();

const featureController = require('../app/controllers/FeatureController');

router.use('/timer', featureController.timer);
router.use('/', featureController.index);

module.exports = router;
