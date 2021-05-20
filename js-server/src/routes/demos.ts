import express from 'express';
import { Demo, IDemo } from '../models';

const router = express.Router();

router.get('/', (req, res, next) => {
    Demo.find({})
    .then((data) => res.status(200).json(data))
    .catch(err => res.status(500).json(err));
});

router.post('/', (req, res, next) => {
    const newDemo = req.body as IDemo;
    Demo.create(newDemo)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(500).json(err));
})

export default router;