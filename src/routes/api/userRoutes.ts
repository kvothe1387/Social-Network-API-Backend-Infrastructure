import { Router } from 'express';

const router = Router();

import {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getFriends,
  addFriend,
  deleteFriend,
} from '../../controllers/userController.js';

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').get(getFriends).post(addFriend).delete(deleteFriend);

export { router as userRouter };