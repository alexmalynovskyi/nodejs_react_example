import { Router } from 'express';

import { revertDigit } from '../controllers/DigitController';

const router = Router();

router.post('/reverse', revertDigit);

export default router;