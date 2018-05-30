const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { competenceName, competenceGroupName } = require('./constants')

const competenceSchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    competenceGroup: { type: ObjectId, ref: competenceGroupName }
});

const competenceDoc = mongoose.model(competenceName, competenceSchema);
module.exports = {
    competenceDoc
}