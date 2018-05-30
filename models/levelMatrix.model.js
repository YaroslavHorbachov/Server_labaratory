const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { positionSchemaName, competenceGroupName, levelMatrixName } = require('./constants')
const { levelSchema } = require('./level.model')

const levelMatrixSchema = new Schema({
    position: { type: ObjectId, ref: positionSchemaName, required: true },
    competenceGroup: { type: [ObjectId], ref: competenceGroupName, required: true },
    level: levelSchema
})
const levelMatrixDoc = mongoose.model(levelMatrixName, levelMatrixSchema)

module.exports = {
    levelMatrixDoc
}