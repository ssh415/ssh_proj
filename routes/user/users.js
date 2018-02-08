var express = require('express');
var router = express.Router();
var Models = require('../../models/Models');

/**
 * 获取账号列表
 */
router.get('/', function (req, res, next) {
    var limit = req.param('limit');
    var page = req.param('page');
    console.log(limit, page);
    var json = {
        success: true,
        msg: '获取成功'
    };
    var total = 0;
    Models.Account.findAll().then(function(result) {
        total = result.length;
    });
    var params = {};
    if (limit && page) {
        params.limit = limit * 1;
        params.offset = (page - 1) * limit;
    }
    Models.Account.findAll(params).then(function(results) {
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
