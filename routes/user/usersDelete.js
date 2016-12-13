var express = require('express');
var router = express.Router();
var Models = require('../../models/Models');
var LogService = require('../../service/LogService');

/**
 * 账号删除
 */
router.post('/', function (req, res, next) {
    var id = req.param('id');
    var username = req.param('username');
    var operator = req.param('operator');
    var json = {
        success: true,
        msg: '删除成功'
    };
    Models.Account.destroy({
        where: {
            id: id
        }
    }).then(function(result) {
        res.send(json);
    }).catch(function (err) {
        console.log(err.message);
        json.success = false;
        json.msg = err.message;
        res.send(json);
    });

    var time = new Date().toLocaleString();
    var modelName = 'User';
    var context = '账号[' + username + ']已被删除，操作时间：' + time + '，操作人：' + operator;
    LogService.save(modelName, context, 'Admin', time);
});

module.exports = router;
