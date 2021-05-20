import express from 'express';
import userRouter from './users';
import demoRouter from './demos';

const router = express.Router();

router.use('/demos', demoRouter);
router.use('/users', userRouter);

export default router;
