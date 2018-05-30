const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { userName, positionSchemaName } = require('./constants')
const { levelSchema } = require('./level.model')
const userSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String },
        position: { type: ObjectId, ref: positionSchemaName, required: true },
        level: levelSchema
    },
    { versionKey: false }
);


const userDoc = mongoose.model(userName, userSchema)


module.exports = {
    userDoc
}
