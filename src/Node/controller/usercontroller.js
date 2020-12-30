var UserModule = require('../model/usermodel');
var jwt = require('jsonwebtoken');
var {ACCESS_TOKEN_SECRET} = require('../tokens')
var bcrypt = require('bcrypt');

var register = async (req,resp)=>{
    const token = jwt.sign(req.body,ACCESS_TOKEN_SECRET)
    var user = {"username":req.body.username, "email":req.body.email, "password":req.body.password, "token": token}
    const User = new UserModule(user);
    const response = User.save();
    console.log(jwt.decode(token,ACCESS_TOKEN_SECRET))
    resp.cookie("token",token);
    resp.send(response);

}

var login= async(req,resp)=>{

   
    
    if(req.cookies['token']==undefined){
        user=req.body;
        console.log(user)
    }
    else
    var user = jwt.decode(req.cookies['token'],ACCESS_TOKEN_SECRET)
    
 UserModule.find({email:user.email},async (err,res)=>{
     console.log(res.length)
       if(!err && res.length!=0){
      var comparision =  await bcrypt.compare(req.body.password, res[0].password)
      if(comparision){
          resp.json({"msg":"Login Successful"})
         
      }
      else{
          resp.json({"msg":"username/password incorrect"})
      }}else{
          resp.json({"msg":"Please sign up before logging in"})
      }
   })
 
   


}



module.exports = {register,login};