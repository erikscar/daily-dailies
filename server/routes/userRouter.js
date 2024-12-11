import express from 'express';
import { getUsers, postUser, searchForUser } from '../controllers/usersController.js';

const router = express.Router()

router.get("/", getUsers)
router.post("/search", searchForUser)
router.post("/", postUser)

export default router;