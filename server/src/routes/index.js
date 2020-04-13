import { Router } from 'express';

const router = Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({
    message: 'test server'
  });
});

export default router ;
