const express = require('express');
const dh = require('./public/sever_dh');
const app = express();
app.use(express.static('public'));

// home directory
app.get('/index.html', function(req,res){
    res.sendFile(__dirname + "/index.html");
});


// 
app.get('/exchangekey', function(req,res){
    res.sendFile(__dirname + "/index.html");
})


var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log(dh.generate_key());
    console.log(dh.calculate_secret_key(123434,65756));
    console.log("http://%s:%s", host, port) 
});
