var restful = require('restful');
var _ = require('underscore');
var express = require('express');
var router = express.Router();


var csv = require('csv');


var data = {
    header: null, 
    obj: null,
};
var fs = require('fs');

var parser = csv.parse();

fs.createReadStream(__dirname + '/../data/file.csv').pipe(parser);

parser.on('readable', function(){
    
    while(line = parser.read()){
        if (!data.header){
            data.header = line;
        } else {
            var obj = _.object(data.header, line);
            if (obj.id) {
                console.log('add', obj);
                if (!data.obj){
                    data.obj = {};
                }
                data.obj[obj.id] = obj;
            }
        }
    }
});

router.param('id', function(req, res, next, id){
    req.user = data.obj[id];
    next();
});

/* GET home page. */

router.get('/', function(req, res, next) {
    res.json(_.keys(data.obj));
});

router.get('/:id', function(req, res, next) {
    res.json(req.user);
});

module.exports = router;
