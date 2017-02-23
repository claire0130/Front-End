var express = require('express');
var app = express();
app.listen(3000, function() {
	console.log('start! express server on port 3000');
});

// Static 디렉토리 처리
app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/main.html');
});