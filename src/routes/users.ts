import express from 'express';
import { getAllUsers, getUserById, createUser, updateUserEmail, deleteUser } from '../controllers/users';
const router = express.Router();

router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.post('/', createUser);

router.patch('/changeEmail', updateUserEmail);

router.delete('/', deleteUser);

export default router;