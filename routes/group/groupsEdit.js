var express = require('express');
var router = express.Router();
var Models = require('../../models/Models');
var LogService = require('../../service/LogService');

/**
 * 群组编辑
 */
router.post('/', function (req, res, next) {
    var id = req.param('id');
    var name = req.param('name');
    var cname = req.param('cname');
    var operator = req.param('operator');
    var json = {
        success: true,
        msg: '编辑成功'
    };
    Models.Group.update({
        cname: cname,
        updater: operator,
        updateTime: new Date().toLocaleString()
    }, {
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
    var context = '群组[' + name + ']已被修改，修改时间：' + time + '，修改人：' + operator;
    LogService.save(modelName, context, 'Admin', time);
});

module.exports = router;
