const express = require('express')
const router = express.Router()

const Requests = require('../controllers/event')

router.get('/', (req, res) => {
    res.send('<html><h1>Hello World</h1></html>')
})

router.post('/log/request', async (req, res) => {
    Requests.create(res, req.body)
})

module.exports = router
