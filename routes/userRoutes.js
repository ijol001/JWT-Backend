import express from "express";
const router = express.Router({ mergeParams: true });
import userReg from "../controllers/userReg.js";
import userLogin from "../controllers/userLogin.js";
// import changeUserPassword from "../controllers/changeUserPassword.js";
import checkUserAuth from "../middleware/authMiddleware.js";
import cors from "cors";
import loggedUser from "../controllers/loggedUser.js";
// import resetPasswordEmail from "../controllers/resetPasswordEmail.js"
// import userPasswordReset from "../controllers/userPasswordReset.js";

// router.use('/changeUserPassword', checkUserAuth);
router.use('/loggedUser', checkUserAuth);

//public Routes
router.post('/reg', cors(), userReg);
router.post('/login', cors(), userLogin);
// router.post('/resetPasswordEmail', cors(), resetPasswordEmail);
// router.post('/userPasswordReset/:id/:token', cors(),  userPasswordReset);

//protected Routes 
// router.post('/changeUserPassword', changeUserPassword);
router.get('/loggedUser', loggedUser);

export default router;
