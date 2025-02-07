import { Router } from 'express';
import * as userController from '../../controllers/userController.js';

const router = Router();

router.route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser);

    router.route("/:userId").get(userController.getUserById).delete(userController.deleteUser).put(userController.updateUser);

router.route('/:userId/friends/:friendId')
    .post(userController.addFriend)
    .delete(userController.removeFriend);

export default router;





