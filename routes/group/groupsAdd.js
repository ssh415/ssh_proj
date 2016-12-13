var express = require('express');
var router = express.Router();
var Models = require('../../models/Models');
var LogService = require('../../service/LogService');

/**
 * 群组新增
 */
router.post('/', function (req, res, next) {
    var name = req.param('name');
    var cname = req.param('cname');
    var operator = req.param('operator');
    var json = {
        success: true,
        msg: '新增成功'
    };
    Models.Group.create({
        name: name,
        cname: cname,
        createTime: new Date().toLocaleString(),
        creator: operator
    }).then(function(created) {
        res.send(json);
    }).catch(function(err) {
        console.log(err.message);
        json.success = false;
        json.msg = err.message;
        res.send(json);
    });

    var time = new Date().toLocaleString();
    var modelName = 'Group';
    var context = '群组[' + name + ']已添加，添加时间：' + time + '，添加人：' + operator;
    LogService.save(modelName, context, 'Admin', time);
});

module.exports = router;
