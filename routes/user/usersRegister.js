var express = require('express');
var router = express.Router();
var Models = require('../../models/Models');
var LogService = require('../../service/LogService');

/**
 * 账号注册
 */
router.post('/', function (req, res, next) {
    var username = req.param('username');
    var realname = req.param('realname');
    var remark = '-';
    var password = req.param('password');
    var group_id = null;
    var json = {
        success: true,
        msg: '注册成功'
    };
    Models.Account.create({
        username: username,
        realName: realname,
        remark: remark,
        password: password,
        groupId: group_id,
        createTime: new Date().toLocaleString(),
        creator: '',
        userType: 0
    }).then(function (result) {
        res.send(json);
    }).catch(function (err) {
        console.log(err.message);
        json.success = false;
        json.msg = err.message;
        res.send(json);
    });

    var time = new Date().toLocaleString();
    var modelName = 'User';
    var context = '账号[' + username + ']完成注册，操作时间：' + time;
    LogService.save(modelName, context, 'Admin', time);
});

module.exports = router;
