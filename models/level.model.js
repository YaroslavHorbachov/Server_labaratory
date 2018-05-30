const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const levelSchema = new Schema({
    type: String,
    require: true,
    enum: ['Trainee', 'Junior', 'Junior+', 'PreMiddle', 'Middle', 'Middle+', 'Senior'],
    default: 'Trainee'
})
module.exports = {
    levelSchema
}