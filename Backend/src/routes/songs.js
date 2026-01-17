import express from "express";
import {
  allSongs,
  artist,
  selectedSong,
  addReviews,
  editReviews,
  deleteReviews,
  idSong
} from "../controllers/songController.js";

const router = express.Router();

router.get('/', allSongs);
router.get('/artist/:artistName', artist);
router.get('/:songname', selectedSong);

router.post('/:songid/review', addReviews);

router.put('/:songid/review/:reviewid', editReviews);

router.delete('/:songid/review/:reviewid', deleteReviews);

export default router;
