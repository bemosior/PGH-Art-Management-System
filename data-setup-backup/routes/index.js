var express = require('express');
var router = express.Router();
var request = require('request');
var waterfall = require('async-waterfall');
var cookieParser = require('cookie-parser');


//I am well aware that you shouldn't put DB creds in github. The DB is free and we will
//change this before friday to use .env and so forth.
var cloudantUsername = "gonlypordstooationsondis";
var cloudantPassword = "44f07dbcd8547e3f0092b5a235b4800715ba7c78";

router.get("/", function(req, res, next) {
    res.render("pages/main");
})


router.get("/eventJSONExample", function(req, res, next) {

                request({
                    url: "https://ed649edb-122a-487a-9584-8b4edd837fcf-bluemix.cloudant.com/unblurred/_design/allEvents/_view/gimmeAll?reduce=false", //URL to hit
                    method: 'GET',
                }, function(error, response, body) {
                    if (error) {
                        console.log(error);
                    } else {
                        res.send(body)

                    }
                }).auth(cloudantUsername, cloudantPassword)

})


module.exports = router;
