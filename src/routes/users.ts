import express from 'express';
import { getAllUsers, getUserById, updateUserEmail, deleteUser, login, register } from '../controllers/users';
const { requireAuth } = require('../middlewares/users');
const router = express.Router();

router.get('/', requireAuth, getAllUsers);

router.get('/:id', getUserById);

router.post('/login', login);

router.post('/register', register);

router.patch('/changeEmail', updateUserEmail);

router.delete('/', deleteUser);

export default router;
