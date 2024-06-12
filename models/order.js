const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    customerId: { type: Schema.Types.ObjectId, ref: 'Customer' },
    amount: Number,
    date: Date
});

module.exports = mongoose.model('Order', OrderSchema);
