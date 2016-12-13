var express = require('express');
var router = express.Router();
var Models = require('../../models/Models');
var LogService = require('../../service/LogService');

/**
 * 群组删除
 */
router.post('/', function (req, res, next) {
    var id = req.param('id');
    var name = req.param('name');
    var operator = req.param('operator');
    var json = {
        success: true,
        msg: '删除成功'
    };
    Models.Group.destroy({
        where: {
            id: id
        }
    }).then(function(result) {
        res.send(json);
    }).catch(function(err) {
        console.log(err.message);
        json.success = false;
        json.msg = '服务器异常：' + err.message;
        res.send(json);
    });

    var time = new Date().toLocaleString();
    var modelName = 'Group';
    var context = '群组[' + name + ']已被删除，操作时间：' + time + '，操作人：' + operator;
    LogService.save(modelName, context, 'Admin', time);
});

module.exports = router;
