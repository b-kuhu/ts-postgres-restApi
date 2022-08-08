import {Router} from 'express';
const router = Router();

import { getAnimal, getAnimalById, createAnimal, updateAnimal, deleteAnimal } from '../controllers/index-controller';

router.get('/animals', getAnimal);
router.get('/animals/:id', getAnimalById);
router.post('/animals', createAnimal);
router.put('/animals/:id', updateAnimal)
router.delete('/animals/:id', deleteAnimal);

export default router;