import { Router } from "express";
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', PageController.all);
router.get('/cachorros', PageController.dog);
router.get('/gatos', PageController.cat);
router.get('/peixes', PageController.fish);

router.get('/busca', SearchController.search);

export default router;