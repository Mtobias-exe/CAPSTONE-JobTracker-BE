const express = require('express')
const router = express.Router()
const jtCTRL = require('../controllers/jtController')

router.route('/').get(jtCTRL.readJob).post(jtCTRL.createJob);

router.route('/:id').put(jtCTRL.updateJob)

router.get('*', (req, res)=>{
    res.send('Invalid Route: 404')
})

module.exports = router