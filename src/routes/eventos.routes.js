import { Router } from 'express';
// controllers
import { actualizarEvento, crearEvento, verEventos } from '../controllers/eventos.controllers.js';
// Verificaciones
// imagenes
import multer from 'multer';
import { storage } from '../middlewares/cloudinary.js';
const upload = multer({
    storage: storage
})

const router = Router();

const inputImg = upload.fields([{ name: 'eventoImg', maxCount: 1 }]);
router.post("/crearEventos", inputImg, crearEvento);
router.get("/verEventos", verEventos);
router.delete("/actualizarEvento/:id", inputImg, actualizarEvento);


export default router;