
import userModel from "../models/user.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config()
import jwt from "jsonwebtoken";

async function userReg(req, res) {
  const { first_name, last_name, email, password, password_confirmation } = req.body;
  try {
    const user = await userModel.findOne({ email: email });
    if (user) {
      res.status(201).send({ "status": "failed", "message": "Email already exists" });
      return;
    }
    if (!first_name || !last_name || !email || !password || !password_confirmation) {
      res.send({ "status": "failed", "message": "All fields are required" });
      return;
    }
    if (password !== password_confirmation) {
      res.send({ "status": "failed", "message": "Password and Confirm Password do not match" });
      return;
    }
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new userModel({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: hashPassword,
    });
    await newUser.save();
    const saved_user = await userModel.findOne({ email: email });
    const token = jwt.sign({ userID: saved_user.id }, process.env.JWT_SECRET_KEY, { expiresIn: '10min' });
    console.log("generated token:", token);
    res.status(200).send({
      "status": "success", "message": "Registration successful",
      "token": token
    });
  }
  catch (error) {
    console.error(error);
    res.status(500).send({ "status": "failed", "message": "Unable to register" });
  }
}
export default userReg;
