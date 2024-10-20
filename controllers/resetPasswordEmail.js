// import userModel from "../models/user.js";
// import dotenv from "dotenv";
// dotenv.config()
// import jwt from "jsonwebtoken";
// import transporter from "../config/emailConfig.js";

// async function resetPasswordEmail(req, res) {
//     const { email } = req.body
//     if (email) {
//         const user = await userModel.findOne({ email: email })
//         if (user) {
//             const secret = user._id + process.env.JWT_SECRET_KEY
//             const token = jwt.sign({ userID: user._id }, secret, { expiresIn: '30m' });
//             const link = `http://127.0.0.1:3000/api/user/userPasswordReset/${user._id}/${token}`;
//              console.log(link);
//             let info = await transporter.sendMail({
//                 from: process.env.EMAIL_FROM,
//                 to: user.email,
//                 subject: "Auth Web App - Link to reset password",
//                 html: `<a href=${link}>Click here</a> To reset your password , If not requested by you then Ignore!`
//             })
//             res.send({ "status": "success", "message": "Please check your Email to Reset Password", "info": info })
//         }
//         else {
//             res.send({ "status": "failed", "message": "Email doesn't exist" })
//         }
//     }
//     else {
//         res.send({ "status": "failed", "message": "Email is required" })
//     }


// }

// export default resetPasswordEmail;