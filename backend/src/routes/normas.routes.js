import { Router } from "express";
import {getNormas, createNewNorma, getNormasById, updateValidityNorma, getByWordKey} from '../controllers/normas.controllers'


const router = Router();

router.get('/normas', getNormas);
router.get('/normas/:id', getNormasById);
router.post('/search', getByWordKey);
router.post('/normas', createNewNorma);
router.put('/normas/:id', updateValidityNorma );


export default router;