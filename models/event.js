const mongoose = require('mongoose')
const db = require('../utils/mongodb')

// Event Model
const EventSchema = new db.mongoose.Schema({
    ban: String,
    msisdn: { type: String, required: true },
    type: { type: String, required: true },
    campaign_id: String,
    campaign_name: String,
    campaign_date: String,
    event_date: String,
    value: String,
    p1: String,
    p2: String,
    p3: String,
    p4: String,
    create_date: { type: Date, default: Date.now },
    trigger_id: String,
    info: String
}, { collection: 'events' })

exports.Event = db.connect.model('Event', EventSchema)