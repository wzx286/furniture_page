let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(express.static(__dirname+'/../src'));

let server = app.listen(8081,function(){
	console.log("server start!");
});