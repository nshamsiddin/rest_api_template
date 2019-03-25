const logger = require('../utils/logger')
// const datetime = require('../utils/datetime')
const Model = require('../models/chrg_dt_req')

exports.create = (event_date, msisdn, source, response) =>
    new Model.Request({ event_date, msisdn, source, response })
        .save(err => {
            if (err)
                logger.error(err)
        })

exports.getByMsisdn = (msisdn) => Model.Request.find({ msisdn })

exports.getBySource = (source) => Model.Request.find({ source })