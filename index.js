const express = require('express');
const dh = require('./public/sever_dh'),
bodyParser = require('body-parser');
const app = express();
app.use(express.static('public'));

// home directory
app.get('/index.html', function(req,res){
    res.sendFile(__dirname + "/index.html");
});


// allow user can get key by api
app.get('/get_key/:publickey', function(req,res){
    req.params.name
    var private_key, public_key = dh.generate_key();
    var shared_hash = dh.calculate_secret_key(req.params.publickey,private_key);
    //TODO: display only for test
    console.log(shared_hash);
    res.send(""+public_key);
})


var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log(dh.generate_key());
    console.log(dh.calculate_secret_key(123434,65756));
    console.log("http://%s:%s", host, port) 
});
