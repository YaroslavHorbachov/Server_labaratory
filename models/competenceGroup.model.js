const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { competenceName, competenceGroupName } = require('./constants')

const competenceGroupSchema = new Schema({
    name: { type: String, unique: true, required: true },
    competences: { type: [ObjectId], ref: competenceName, default: null }
})
const competenceGroupDoc = mongoose.model(competenceGroupName, competenceGroupSchema);
module.exports = {
    competenceGroupDoc
}