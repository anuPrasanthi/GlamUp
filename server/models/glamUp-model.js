const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GlamUp = new Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        category: { type: String, require: true },
        gender: { type: String, require: true },
        item_name: { type: String, require: true },
        price: { type: Number, require: true },
        sizes: { type: String, require: true },
        colors: { type: String },
        imgCollection: { type: Array }
    },
    { timestamps: true },//audit records
)
module.exports = mongoose.model('GlamUp', GlamUp)