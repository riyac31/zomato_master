import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

const Router = express.Router();

//Models
import { UserModel } from "../../database/user";

//Validation
import { ValidateSignup, ValidateSignin } from "../../validation/auth";

/*
Route         /signup
Descrip       Signup with email and password
Params        None
Access        Public
Method        POST
status 500-->error code
*/

Router.post("/signup", async(req,res) => {
 try {
await ValidateSignup(req.body.credentials);

await UserModel.findEmailAndPhone(req.body.credentials);
//DB
  const newUser = await UserModel.create(req.body.credentials);

  //JWT Auth Token
  const token = newUser.generateJwtToken();

  return res.status(200).json({token});

 } catch (error) {
   return res.status(500).json({error: error.message});
 }
});


/*
Route         /signin
 Descrip       Signin with email and password
Params        None
Access        Public
Method        POST
*/

Router.post("/signin", async(req,res) => {
 try {
await ValidateSignin(req.body.credentials);

   const user = await UserModel.findByEmailAndPassword(
     req.body.credentials
   );

  //JWT Auth Token
  const token = user.generateJwtToken();
  // just for checking purpose
  return res.status(200).json({token, status: "Success"});

 } catch (error) {
   return res.status(500).json({error: error.message});
 }
});


/*
Route         /google
Descrip       Google Signin
Params        None
Access        Public
Method        GET
*/

Router.get("/google", passport.authenticate("google",{
scope: [
 "https://www.googleapis.com/auth/userinfo.profile",
 "https://www.googleapis.com/auth/userinfo.email"
],
})
);

/*
Route         /google/callback
Descrip       Google Signin callback
Params        None
Access        Public
Method        GET
*/

Router.get("/google/callback", passport.authenticate("google",{failureRedirect: "/"}),
(req,res) => {
 return res.json({token: req.session.passport.user.token});
}
);




export default Router;

//amy name wil be encrypted
//encrypted - 45t1y880 -> yha8319 -> hence we will be doing bcrypt js
// hashing as in normal encryption
//salting is repetative hashing
//const bcryptSalt= await bycrypt.genSalt(8)
// 8 fold salting

//const hashedPass= await bycrypt.hash(password, bcryptSalt); actual hashing done
//password is the password field
//UserModel.ourStatic()
//checkUserByEmail.ourMethods()
// jwt is for securing communication
