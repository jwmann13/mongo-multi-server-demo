import * as express from 'express';
import { IUser, User } from '../models';
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  User.find({})
  .then((data) => {
    res.json(data);
  })
  .catch((err) => {
    res.send(err);
  })
});

router.post('/', (req, res, next) => {
  const newUser: IUser = req.body;
  User.create(newUser)
  .then((data) => {
    res.json(data);
  })
  .catch((err) => {
    res.send(err);
  })
})

export default router;
