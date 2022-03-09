const { Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionsSchema = new Schema ({
    reactionId:{
        type: Schema.Types.ObjectId,
        default: ()=> new Types.ObjectId(),
    },
    reactionBody:{
        type: String,
        required:true,
        maxlength:280,
    },
    username:{
        type:String,
        required:true,
    },
    createsAt:{
        type:Date,
        default:Date.now,
                // TODO: getter method to formulate timestamp on querry
        
    }
},{
    toJSON:{
        getters:true
    },
    id:false,
})



const Reactions = model ('Reactions', reactionsSchema);

module.exports = Reactions; 