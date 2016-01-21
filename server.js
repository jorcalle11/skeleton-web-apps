var express = require('express');
var morgan = require('morgan');
var port = process.env.PORT || 3000;
var app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
	res.send('hello world');
});

app.listen(port,function(){
	console.log('server running and listenning in http://localhost:'+port);
});
