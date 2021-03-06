const { Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionsSchema = require('./Reactions')
const thoughtsSchema = new Schema({
    thoughtText:{
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt:{
        type: Date,
        default: Date.now,
        // TODO: getter method to formulate timestamp on querry
    },
    username:{
        type: String,
        required: true,
    },
    reactions:[reactionsSchema]
},{
    toJSON:{
        getters:true
    },
    id:false,
})
thoughtsSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
})

const Thoughts = model ('Thoughts', thoughtsSchema);

module.exports = Thoughts; 