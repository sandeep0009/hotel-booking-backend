

import { Router } from "express";
import { signIn, signUp } from "./user_controller";
const router=Router();
router.post('/sigin',signIn);
router.post('/signup',signUp);

export default router;