const config = require('./config')
const environment = config.environment

const express = require('express')

//Custom modules
const logger = require('./utils/logger')
const mongodb = require('./utils/mongodb')

const app = express()

//Body parser middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//Resources
const api_v1 = require('./resources/api_v1')
app.use('/api_v1', api_v1)

const port = config.server.port
app.set('port', port)

app.listen(port, (err) => {
    logger.info(`Server started listening on port ${port}`)
})