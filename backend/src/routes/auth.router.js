import {Router} from 'express';
import { registerUser,loginUser, logoutUser, deleteUser , adminPasswordChange,assignAdmin,removeAdmin,adminUserRegister} from '../controllers/auth.controller.js';
import { userAuth } from '../middlewares/auth.middleware.js'
import { checkUserExist } from '../controllers/auth.controller.js';
import { resetPassword } from '../controllers/auth.controller.js';
import { changePassword } from '../controllers/auth.controller.js';
import { forgotPassword } from '../controllers/auth.controller.js';
import { checkRole} from "../middlewares/role.middleware.js";

const router = Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').post(logoutUser);
router.route('/checkuserexist').post(checkUserExist);
router.route('/resetPassword').post(resetPassword);
router.route('/changePassword').post(userAuth, changePassword);
router.route('/forgotPassword').post(forgotPassword);
router.route('/adminpassword').patch(userAuth, checkRole(['admin']),adminPasswordChange);
router.route('/adminuserregister').post(userAuth, checkRole(['admin']),adminUserRegister);




router.route('/assignAdmin').patch(userAuth, checkRole(['admin']),assignAdmin);
router.route('/removeAdmin').patch(userAuth, checkRole(['admin']),removeAdmin);



router.route('/deleteUser/:userId').delete(userAuth, checkRole(['admin']),deleteUser);





export default router;