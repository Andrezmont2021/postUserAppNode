import { Router } from 'express';
import * as postController from '../controller/post.controller';

const router = Router();

router.post('/register', postController.registerPost);

export default router;
