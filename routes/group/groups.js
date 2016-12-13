var express = require('express');
var router = express.Router();
var Models = require('../../models/Models');

router.get('/', function (req, res, next) {
    var limit = req.param('limit');
    var page = req.param('page');
    var json = {
        success: true,
        msg: '获取成功'
    };
    var total = 0;
    Models.Group.findAll().then(function(result) {
        total = result.length;
    });

    Models.Group.findAll({
        'limit': limit * 1,
        'offset': (page - 1) * limit
    }).then(function(results) {
        var arr = [];
        for (var i = 0; i < results.length; i++) {
            arr.push(results[i]);
        }
        json.items = arr;
        json.total = total;
        res.send(json);
    }).catch(function(err) {
        console.log(err.message);
        json.success = false;
        json.msg = '服务器异常: ' + err.message;
        res.send(json);
    });
});

module.exports = router;
