//mui.init();
var text = '1111'

function startRecognize() {
	var options = {};
	options.engine = 'iFly';
	text = "";
	alert("开始语音识别：");
	plus.speech.startRecognize(options, function(s) {
		text += s;

	}, function(e) {
		alert("语音识别失败：" + e.message);
	});
}

function showTetx() {
	alert(text)
}
