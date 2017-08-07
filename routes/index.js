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


router.yesOrNo = function (req, res) {
    req.checkBody('YesOrNo', 'Enter your answer').notEmpty();
    var answer1 = req.body.YesOrNo;
    if(answer1==="yes" || answer1 === "ya"){
        res.render("quizSteps1");
    }
    else{
        res.render("success");
    }

};
router.post("/quiz-steps", router.yesOrNo);
router.get("/quiz-steps", function (req, res) {
    res.render("quiz-steps")
});

router.meetLocation = function (req, res) {
    req.checkBody('answer', 'Enter your answer').notEmpty();
    var ans = req.body.answer;
    if(ans==="a"){
        res.render("quizSteps2");
    }
    else{
        res.render("quizSteps1");
    }
};
router.post("/quizSteps1", router.meetLocation);
router.get("/quizSteps1", function (req, res) {
    res.render("quizSteps1")
});


module.exports = router;