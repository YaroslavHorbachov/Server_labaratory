const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { competenceGroupName, competenceName } = require('./constants')

const evaluationSchema = new Schema({
    evaluationDate: { type: Date, required: true },
    comment: { type: String, required: true },
    competenceGroup: { type: [ObjectId], ref: competenceGroupName, required: true }
})
const evaluationDoc = mongoose.model(evaluationName, evaluationSchema)

module.exports = {
    evaluationDoc
}