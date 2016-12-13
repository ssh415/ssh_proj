var express = require('express');
var router = express.Router();
var Models = require('../../models/Models');
var LogService = require('../../service/LogService');

/**
 * 账号新增
 */
router.post('/', function (req, res, next) {
    var username = req.param('username');
    var realname = req.param('realname');
    var remark = req.param('remark');
    var password = req.param('password');
    var group_id = req.param('group_id') || null;
    var operator = req.param('operator');

    var json = {
        success: true,
        msg: '新增成功'
    };
    Models.Account.create({
        username: username,
        groupId: group_id,
        realName: realname,
        remark: remark,
        password: password,
        createTime: new Date().toLocaleString(),
        creator: operator,
        userType: 1
    }).then(function(result) {
        res.send(json);
    }).catch(function(err) {
        console.log(err.message);
        json.success = false;
        json.msg = err.message;
        res.send(json);
    });

    var time = new Date().toLocaleString();
    var modelName = 'User';
    var context = '账号[' + username + ']已添加，添加时间：' + time + '，添加人：' + operator;
    LogService.save(modelName, context, 'Admin', time);
});

module.exports = router;
