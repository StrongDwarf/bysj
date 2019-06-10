let https = require('https');


function putGetToTaobaoAPI(url, callback) {

  var url = "https://pub.alimama.com/items/search.json?q=鞋子";
  url = encodeURI(url);
  https.get(url, (res) => {
    console.log('状态码:', res.statusCode);
    console.log('请求头:', res.headers);

    var dd = '';
    res.on('data', (d) => {
      dd += d;
    });
    res.on('end', (d) => {
      console.log(dd);
      callback(dd);
    })

  }).on('error', (e) => {
    console.error(e);
  });
}


module.exports = {
  get(req, res) {
    console.log(JSON.stringify(req.query));
    putGetToTaobaoAPI('a', function (dd) {
      res.send(dd).end();
    })
  },
  post(req, res) {
    if (req.body.url) {
      res.json(putGetToTaobaoAPI(req.body.url))
    } else {
      res.json({ error: true, message: '格式错误' })
    }
  },

  recoImg(req, res) {
    if (!req.body.imgData) {
      res.json({ 'error': true, message: '没有图片数据' })
      return
    }

    console.log('请求图片识别接口')
    let baiduApi = require('./baiduApi');
    baiduApi.recoImg(req.body.imgData, function (data) {
      res.json({ 'keyWord': data });
      return;
    });
  }
}