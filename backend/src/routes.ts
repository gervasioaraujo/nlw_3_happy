import { Router } from 'express';
import multer from 'multer';

import OrphanagesController from './controllers/OrphanagesController';
import uploadConfig from './config/upload';

// Rota -> conjunto (o caminho todo para se conseguir um recurso)
// Recurso -> usuário
// Métodos HTTP -> GET, POST, PUT, DELETE
// Parâmetros -> Query params (/users?search=diego), Route params (/users/1), Body
// - console.log(request.query);
// - console.log(request.params);
// - console.log(request.body);
const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
routes.post('/orphanages', upload.array('images') ,OrphanagesController.create)

export default routes;