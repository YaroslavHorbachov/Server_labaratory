const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { positionName } = require('./constants')
const positionSchema = new Schema({
    name: { type: String, required: true, unique: true }
})
const positionDoc = mongoose.model(positionName, positionSchema)
module.exports = {
    positionDoc
}