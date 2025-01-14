import { Router } from 'express';
import apiRoutes from './api/index.js';

const routher = Router ();

Router.use('/api', apiRoutes);

export default router;

