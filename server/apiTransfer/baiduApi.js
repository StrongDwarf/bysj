var https = require('https');
var querystring = require('querystring');
var fs = require('fs');
var http = require('http');
var urlencode = require('urlencode')

/*
// 获取token
const param = querystring.stringify({
    'grant_type': 'client_credentials',
    'client_id': 'G7Ca6MB9MbdCkjsPtGOj5uRu',
    'client_secret': '5YGtVWMI0aZF6D9EGTc8n1DWjVVuis2S'
});

https.get(
    {
        hostname: 'aip.baidubce.com',
        path: '/oauth/2.0/token?' + param,
        agent: false
    },
    function (res) {
        // 在标准输出中查看运行结果
        res.pipe(process.stdout);
    }
);

*/

/*
{
    "refresh_token":"25.1dbcf26d231fb3a740ab47b5a487ec66.315360000.1875330815.282335-15907065",
    "expires_in":2592000,
    "session_key":"9mzdCrCvXTj3pcAzy8HmjHOJP7zEoquQXM23JSdr1k1jMq8iTT8F068se7eeU4RMHxiBsisgHauDNGqapnX8mk5Q7Cn6Jg==",
    "access_token":"24.14bfece5810f107ec112e92ca920d299.2592000.1562562815.282335-15907065",
    "scope":"brain_redwine brain_currency public vis-classify_dishes vis-classify_car brain_all_scope vis-classify_animal vis-classify_plant brain_object_detect brain_realtime_logo brain_dish_detect brain_car_detect brain_animal_classify brain_plant_classify brain_ingredient brain_advanced_general_classify brain_custom_dish brain_poi_recognize wise_adapt lebo_resource_base lightservice_public hetu_basic lightcms_map_poi kaidian_kaidian ApsMisTest_Test\u6743\u9650 vis-classify_flower lpq_\u5f00\u653e cop_helloScope ApsMis_fangdi_permission smartapp_snsapi_base iop_autocar oauth_tp_app smartapp_smart_game_openapi oauth_sessionkey smartapp_swanid_verify smartapp_opensource_openapi smartapp_opensource_recapi",
    "session_secret":"c4e81aa7746c8c209e681d17c830bd69"
}
*/


let url = 'https://aip.baidubce.com/rest/2.0/image-classify/v2/advanced_general'    //通用物体和场景识别
let token = "24.a60f92096f90138f938a3a1d0f9668ad.2592000.1559797563.282335-15907065"

/*
fs.readFile('1.jpg', function (err, origin_buffer) {
    if(err) console.log(err)
    var imageStr = origin_buffer.toString('base64')
    putPostToBaiduAPI(imageStr,token)
})
*/

function putPostToBaiduAPI(imageStr,callback) {
    console.log('调用百度图片识别API')
    var token = "24.14bfece5810f107ec112e92ca920d299.2592000.1562562815.282335-15907065"
    imageStr = encodeURIComponent(imageStr)
    var contents = 'image=' +imageStr;

    var options = {
        host: 'aip.baidubce.com',
        path: '/rest/2.0/image-classify/v2/advanced_general?access_token='+token,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            //'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(contents),
            'Connection':'keep-alive',
        }
    }

    var req = https.request(options, function (res) {
        let dd = ''
        res.on('data', function (data) {
            dd += data
        });
        res.on('end',function(data){
            dd = JSON.parse(dd)
        
            dd = dd.result[0].keyword
            callback(dd);
            return
        })
        res.on('error',function(err){
            console.log('1',err)
        })
    });

    req.on('error',err => {
        console.log('2',err)
    })

    req.write(contents);
    req.end
    return
}

module.exports = {
    recoImg:putPostToBaiduAPI
}