const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

/*  MODELS NAME  */

const userSchemaName = 'User';
const positionSchemaName = 'Position';
const competenceGroupName = 'CompetenceGroup';
const competenceName = 'Competence';
const evaluationName = 'Evaluation';
const levelMatrixName = 'LevelMatrix'

/*  SUB DOC  */

const levelSchema = new Schema( {
    type: String,
    require: true,
    enum: ['Trainee', 'Junior', 'Junior+', 'PreMiddle', 'Middle', 'Middle+', 'Senior'],
    default: 'Trainee'
} )

/* USER   */

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

/*  POSITION  */


const positionSchema = new Schema( {
    name: { type: String, required: true, unique: true }
} )

/*  COMPETENCE GROUP  */

const competenceGroupSchema = new Schema( {
    name: { type: String, unique: true, required: true },
    competences: { type: [ObjectId], ref: competenceName, default: null }
} )


/*  COMPETENCE  */

const competenceSchema = new Schema( {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    competenceGroup: { type: ObjectId, ref: competenceGroupName, required: true }
} );

/* EVALUATION  */

const evaluationSchema = new Schema( {
    evaluationDate: { type: Date, required: true },
    comment: { type: String, required: true },
    competenceGroup: { type: [ObjectId], ref: competenceGroupName, required: true }
} )

/*  LEVEL MATRIX  */

const levelMatrixSchema = new Schema( {
    position: { type: ObjectId, ref: positionSchemaName, required: true },
    competenceGroup: { type: [ObjectId], ref: competenceGroupName, required: true },
    level: levelSchema
} )

const userDoc = mongoose.model( userSchemaName, userSchema )
const positionDoc = mongoose.model( positionSchemaName, positionSchema )
const competenceGroupDoc = mongoose.model( competenceGroupName, competenceSchema );
const competenceDoc = mongoose.model( competenceName, competenceSchema );
const evaluationDoc = mongoose.model( evaluationName, evaluationSchema )
const levelMatrixDoc = mongoose.model( levelMatrixName, evaluationSchema )


module.exports = {
    userDoc,
    positionDoc,
    evaluationDoc,
    competenceDoc,
    levelMatrixDoc,
    competenceGroupDoc,
}
