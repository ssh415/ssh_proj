var express = require('express');
var router = express.Router();
var Models = require('../../models/Models');

/**
 * 获取日志列表
 */
router.get('/', function (req, res, next) {
    var modelName = req.param('modelName');
    var limit = req.param('limit');
    var page = req.param('page');
    var json = {
        success: true,
        msg: '获取成功'
    };
    var total = 0;
    var where = {};
    if (modelName && modelName != 'All')
        where.modelName = modelName;
    Models.Log.findAll({
        where: where
    }).then(function(result) {
        total = result.length;
    });
    Models.Log.findAll({
        where: where,
        limit: limit * 1,
        offset: (page - 1) * limit
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
        json.msg = err.message;
        res.send(json);
    });
});

module.exports = router;
