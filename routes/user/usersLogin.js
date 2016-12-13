var express = require('express');
var router = express.Router();
var Models = require('../../models/Models');
var LogService = require('../../service/LogService');

/**
 * 账号登录
 */
router.post('/', function (req, res, next) {
    var username = req.param('username');
    var password = req.param('password');
    var json = {
        success: true,
        msg: '登录成功'
    };
    Models.Account.findOne({
        where: {
            username: username,
            password: password
        }
    }).then(function (result) {
        if (!result) {
            json.success = false;
            json.msg = '账号或密码不正确';
        } else {
            var time = new Date().toLocaleString();
            var modelName = 'Login';
            var context = '账号[' + username + ']已登录，登录时间：' + time;
            LogService.save(modelName, context, 'Admin', time);
        }
        res.send(json);
    }).catch(function (err) {
        console.log(err.message);
        json.success = false;
        json.msg = err.message;
        res.send(json);
    });
});

module.exports = router;
