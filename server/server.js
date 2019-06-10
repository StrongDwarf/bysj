var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var multer = require('multer');
var formidable = require('formidable')
var conn = mongoose.connect('mongodb://localhost/freeSell');
var app = express();
var http = require('http').Server(app);

//自定义一个CORS中间件
var allowCrossDomain = function (req, res, next) {
    // 自定义中间件，设置跨域需要的响应头。
    res.header('Access-Control-Allow-Origin', '*'); 
    // 输出信息
    console.log("调用接口:",req.path);
	next();
};
app.use(express.static(__dirname + '/public'))
//设置bodyParse能解析的数据为无限
app.use(allowCrossDomain);
app.use(bodyParser.json({'limit':'100000000000kb'}));
app.use(bodyParser());



app.use(multer({ dest: '/tmp/'}).array('image'));

//导入路由模块和websocket模块
require('./routers')(app);
http.listen(8083);
console.log('server start port 8083');

(function getIPAdress(){
    var interfaces = require('os').networkInterfaces();
    for(var devName in interfaces){
        var iface = interfaces[devName];
        for(var i=0;i<iface.length;i++){
            var alias = iface[i];
            if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
                console.log("ip:"+alias.address+":8083");
            }
        }
    }
})()
