const express = require('express')
const router = express.Router();

const newsControllers = require('../controllers/NewsController')

router.get('/', newsControllers.index)


module.exports = router;