const express = require('express');
const app = express();
const router = express.Router();

const featureController = require('../app/controllers/FeatureController');

router.get('/timer', featureController.timer);
router.get('/', featureController.index);

module.exports = router;
