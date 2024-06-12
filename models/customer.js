const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    name: String,
    email: String,
    totalSpends: Number,
    visits: Number,
    lastVisit: Date
});

module.exports = mongoose.model('Customer', CustomerSchema);
