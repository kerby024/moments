var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    comment: String,
    moment: {type: Schema.Types.ObjectId, ref: 'Moment'}
    })

mongoose.model('Comment', CommentSchema)