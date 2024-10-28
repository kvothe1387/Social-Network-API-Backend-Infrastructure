import { Router } from "express";

const router = Router();

import {
  getThoughts,
  createThought,
  getThoughtById,
  updateThought,
  deleteThought,
  getReactions,
  createReaction,
  deleteReaction,
} from '../../controllers/thoughtController.js';


router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

router.route('/LthoughtId/reactions').get(getReactions).post(createReaction).delete(deleteReaction);

export { router as thoughtRouter };



