var mongoose = require('mongoose')
var Moment = mongoose.model('Moment')
var Comment = mongoose.model('Comment')

module.exports = {
    onsubmit:function(req, res){
        Moment.create({moment: req.body.moment}, function(err, moment){
            console.log(moment)
            res.json(moment)
        })
    },

    showall:function(req, res){
        Moment.find({}, function(err, moments){
            res.json(moments)
        })
    },

    getonemoment:function(req, res){
        Moment.findOne({_id: req.params.id}).populate('comments').exec(function(err, momentfound){
            res.json(momentfound)
        })
    },

    createcomment:function(req, res){
        console.log(req.body)
        Moment.findOne({_id: req.body.momentsid}, function(err, momentfound){
            Comment.create({comment: req.body.comment, moment: momentfound._id}, function(err, commentmade){
                momentfound.comments.push(commentmade._id)
                momentfound.save()
                res.json(commentmade)
            })
        })
    },

}