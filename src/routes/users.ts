import express from 'express';
import { getItems } from '../controllers/users';
import { createUser } from '../controllers/users';
const router = express.Router();

router.get('/', getItems);

router.get('/:id');

router.post('/', createUser);

router.delete('/:id');

export default router;