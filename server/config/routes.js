var moments = require('./../controllers/moments');
var path = require('path')

module.exports = function(app){
    app.post('/onsubmit', function(req, res){
        moments.onsubmit(req, res)
    })

    app.get('/showall', function(req, res){
        moments.showall(req, res)
    })

    app.get('/getonemoment/:id', function(req, res){
        moments.getonemoment(req, res)
    })

    app.post('/createcomment', function(req, res){
        moments.createcomment(req, res)
    })


    app.all('**', (req, res) => {res.sendFile(path.resolve('./client/dist/index.html'))})
}