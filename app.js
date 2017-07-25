var express = require('express');
var app = express();
var router = express.Router();
var fs = require('fs');
var path = __dirname;
app.use(express.static('public'));

app.use('/static', express.static(path + 'public'));


router.use(function (req,res,next) {
    console.log("/" + req.method);
    next();
});


router.get("/index",function(req,res){
    res.sendFile(path + "/public/views/index.html");

});

router.post("/pass",function(req,res){
    res.send("success");

});

app.use("/",router);


app.listen(3000,function(){
    console.log("Live at Port 3000");
});
