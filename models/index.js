const { competenceDoc } = require('./competence.model')
const { competenceGroupDoc } = require('./competenceGroup.model')
const { evaluationDoc } = require('./evaluation.model')
const { levelSchema } = require('./level.model')
const { levelMatrixDoc } = require('./levelMatrix.model')
const { positionDoc } = require('./positions.model')
const { userDoc } = require('./user.model')
module.exports = {
    competenceDoc,
    competenceGroupDoc,
    evaluationDoc,
    levelSchema,
    levelMatrixDoc,
    positionDoc,
    userDoc
}
