import userModel from "../models/user.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config()
import jwt from "jsonwebtoken";

async function userLogin(req, res) {
  try {
    const { email, password } = req.body;
    console.log(email + ", " + password);
    if (email && password) {
      const user = await userModel.findOne({ email: email });
      if (user != null) {
        const isMatch = await bcrypt.compare(password, user.password);
        if ((user.email === email) && isMatch) {
          const token = jwt.sign({ userID: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: '4h' });
          res.send({ "status": "success", "message": "Login Success", "token": token });

        }
        else {
          res.send({ "status": "failed", "message": "Email or Password is not valid" });
        }
      }
      else {
        res.send({ "status": "failed", "message": "You are not a registered user" });
      }
    }
    else {
      res.send({ "status": "failed", "message": "All fields are required" });
    }
  }
  catch (error) {
    console.log(error);
    res.send({ "status": "failed", "message": "Unable to Login" });
  }
}

export default userLogin;