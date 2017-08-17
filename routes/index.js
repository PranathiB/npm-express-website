var express = require('express');
var router = express.Router();

router.get("/",function(req,res){
    res.render("index");

});
router.verifyPassPhrase = function (req, res) {
    req.checkBody('password', 'Password is required').notEmpty();
    var pass = req.body.password;
    if(pass==="hello"){
        res.render("success");
    }
    else{
        res.render("error")
    }
};
router.post("/", router.verifyPassPhrase);

router.get("/a", function (req, res, next) {
    res.render("start");
});

router.get("/hello?:b", function (req, res, next) {
    console.log(req.params.answer);
    res.render(req.params.answer);
});

router.post("/hello", function (req,res,next) {
    res.render(req.body.answer, function(err, handlebars) {
        if (err) {
            if (err.message.indexOf('Failed to lookup view') !== -1) {
                return res.render('sorry');
            }
            throw err;
        }
        res.render(req.body.answer);
    });
});



module.exports = router;