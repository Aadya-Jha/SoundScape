import express from "express";
import { searchArtists } from "../controllers/musicController.js";

const router = express.Router();

router.get("/search", searchArtists);

export default router;
