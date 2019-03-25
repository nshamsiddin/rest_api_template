const mongoose = require('mongoose')
const db = require('../utils/mongodb')

// Request Model
const RequestSchema = new db.mongoose.Schema({
    event_date: String,
    create_date: { type: Date, default: Date.now },
    msisdn: String,
    source: String,
    response: Object
})

exports.Request = db.connect.model('Request', RequestSchema)