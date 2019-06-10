/**
 * 用户代理层
 * 用于处理前端跨域相关
 */
var https = require('https');

/**
 * 获取商品详情页数据:根据url获取url页面数据,并提取出url页面数据中的商品详情页图片url
 * @param  req.body.data 
 * @param  req.body.data.url  
 * @param  res.picUrls
 */
function getdetail(req,res){
    if(!req.body.data){ res.json({error: true, message: '数据格式错误'}).end(); return }

}

/**
 * 发送get请求
 * 
 */
function get(url,callback){
    // var url = 'https://detail.tmall.com/item.htm?id=571017889195'
    var options = {
        host: 'detail.tmall.com',
        path: '/item.htm?id=571017889195',
        method: 'GET',
    }
    var req = https.request(options, function (res) {
        let dd = ''
        res.on('data', function (data) {
            dd += data
        });
        res.on('end',function(data){
            console.log(dd)
        })
        res.on('error',function(err){
            console.log('1',err)
        })
    });

    req.on('error',err => {
        console.log('2',err)
    })

    req.end();
}