// import userModel from "../models/user.js";
// import bcrypt from "bcrypt";

// async function changeUserPassword(req, res) {
//     const { password, password_confirmation } = req.body
//     if (password && password_confirmation) {
//         if (password !== password_confirmation) {
//             res.send({ "status": "failed", "message": "New Password and Confirm New Password does not match" })
//         }
//         else {
//             const saltRounds = 10;
//             const newHashPassword = await bcrypt.hash(password, saltRounds);
//             await userModel.findByIdAndUpdate(req.user._id, { $set: { password: newHashPassword}})
//             res.send({ "status": "success", "message": "Password changed successfully" })
//         }
//     }
//     else {
//         res.send({ "status": "failed", "message": "All fields are required" })
//     }
// }
// export default changeUserPassword;