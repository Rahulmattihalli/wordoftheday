var express = require('express');
var expresssession = require('express-session');
var bodyparser = require('body-parser');
var bcrypt = require('bcrypt');
var router = require('./routes/routes')
const app = express();
var db = require('./config/config');
var mongoose = require('mongoose');
var cookieparser = require('cookie-parser')
var session = require('express-session')


app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cookieparser());
app.use(session({
    key: "user_sid",
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000,
    },
}))

app.use(router);
app.get('/server', (req,res)=>{
    res.send("Bharjari working bro");
})
app.use(cookieparser());
const connection = mongoose.connect(db.url,
    {useNewUrlParser:true,
        useUnifiedTopology: true,
    useCreateIndex:true }, (err)=>{
        if(!err){
            console.log("connection successful")
        }
        else{
            console.log(err);
        }
    }
)

  

const port = process.env.port || 4000;

app.listen(port,(err)=>{
if(!err){
    console.log("Server started")
}
else{
    console.log(err);
}
});

