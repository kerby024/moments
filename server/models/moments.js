var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MomentSchema = new Schema({
    moment: String,
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
    })

mongoose.model('Moment', MomentSchema)