var express = require('express');
var router = express.Router();
var Models = require('../../models/Models');
var LogService = require('../../service/LogService');

/**
 * 账号退出
 */
router.post('/', function (req, res, next) {
    var username = req.param('username');
    var json = {
        success: true,
        msg: '退出成功'
    };
    res.send(json);

    var time = new Date().toLocaleString();
    var modelName = 'Logout';
    var context = '账号[' + username + ']已退出，退出时间：' + time;
    LogService.save(modelName, context, 'Admin', time);
});

module.exports = router;
