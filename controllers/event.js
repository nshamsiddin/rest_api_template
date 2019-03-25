const logger = require('../utils/logger')
// const datetime = require('../utils/datetime')
const Model = require('../models/event')

exports.create = (res, event) =>
    new Model.Request(event)
        .save(err => {
            if (err) {
                logger.error(err)
                res.send(err)
            }
            else
                res.send({
                    errors: null,
                    success: true
                })
        })

exports.getByMsisdn = (msisdn) => Model.Request.find({ msisdn })

exports.getBySource = (source) => Model.Request.find({ source })