import express from 'express';
import { create, get, getAll, remove, update } from '../controllers/product';
const router = express.Router();
router.post('/products',create),
router.get('/products',getAll)
router.get('/products/:id',get)
router.put('/products/:id',update)
router.delete('/products/:id',remove)
export default router;