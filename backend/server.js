var express = require('express'); // remember to install these in the top directory to fill in 
var path = require('path');      // your package.json, as well as anything else you want to add
var app = express();
app.use(express.static('../public/'));

var config = require('./database.json');
// Don't change anything above this line unless you know what it will do


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/users/:username/:pword',function(req,res){

    var Username = req.params.username;
    console.log(Username)
    var Password = req.params.pword;
    var text
    console.log(Password)
    for (var i =0; i<config.Users.length; i++){
        console.log(i)
        console.log(config.Users[i].password)
        console.log(config.Users[i].username)
        console.log(Username)
        console.log(Password)
        console.log(config.Users[i].username===Username)
        console.log(config.Users[i].password===Password)
        if (config.Users[i].username===Username) {
            if (config.Users[i].password===Password) {
             text="You're in!";
             console.log(text)
             break
            } else {
             text="Wrong password!";
             console.log(text) 
             break
            }
        } else {
            text="No username found!";
            console.log(text)
    }}
    res.send('<h6> '+text+'</h6>');
  });

app.listen(8080);

    // Right now this does nothing. To send the index file from the public directory follow the methods in the class example
    // You will need to add the path to the index file public/index.html since we have a slightly more complex set up now.

// You will need to add more routes than just '/' so that your website can talk to your webserver using the get XMLHttpRequests