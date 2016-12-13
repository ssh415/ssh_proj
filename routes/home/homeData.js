var express = require('express');
var router = express.Router();
var Models = require('../../models/Models');

router.get('/', function (req, res, next) {
    var date = req.param('for_date');
    console.log('================' + date);
    var json = {
        success: true,
        msg: '获取成功'
    };
    Models.HomeData.findOne({
        where: {
            datestr: date
        }
    }).then(function(result) {
        json.data = result;
        res.send(json);
    }).catch(function(err) {
        console.log(err.message);
        json.success = false;
        json.msg = '服务器异常: ' + err.message;
        res.send(json);
    });
});

module.exports = router;
