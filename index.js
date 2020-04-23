console.log("hey twitter");
const  express=require('express')
const app =new  express()
var twit = require('twit');
var config =require('./config');
var T = new twit(config);
var bodyparser =require('body-parser');
app.use(bodyparser.json());

    function tweeted(err, data, response) {
        if(err)
        console.log("something went wrong")
        else
        console.log("it worked")
      }
app.post('/tweet',function(req,res,next){
    console.log(req.body);
    var tweet =req.body;
    T.post('statuses/update', tweet , tweeted);
    res.send("success");
})
app.listen(8080,function(){
    console.log("listening in the port 8080 ")
});