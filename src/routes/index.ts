import {Router} from 'express';
const router = Router();

import { AnimalController} from '../controller/index.controller';

router.get('/animals',  AnimalController.getAnimal);
router.get('/animals/:id',  AnimalController.getAnimalById);
router.post('/animals',  AnimalController.createAnimal);
router.put('/animals/:id',  AnimalController.updateAnimal)
router.delete('/animals/:id',  AnimalController.deleteAnimal);

export default router;