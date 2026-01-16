import e from "express";
import { register } from "./user.controller";

const router = e.Router();

router.post('register', register);

export default router;