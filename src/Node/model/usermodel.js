var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');


var user = mongoose.Schema({
    username :{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        unique:true,
        required:true
    },
    token:{
        type:String,
        unique:true,
        required:true
    }

})

    user.pre("save",function(next){
        if(!this.isModified("password")){
            return next();
        }
        this.password = bcrypt.hashSync(this.password,10);
        next();
    })

    user.methods.comparePassword = function(plaintext, callback) {
        return callback(null, bcrypt.compareSync(plaintext, this.password));
    };

    const UserModel = mongoose.model("user",user);

    module.exports = UserModel;