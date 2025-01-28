const express = require('express')
const router = express.Router()
const jtCTRL = require('../controllers/jtController')

router.route('/').get(jtCTRL.readJob).post(jtCTRL.createJob);

module.exports = router