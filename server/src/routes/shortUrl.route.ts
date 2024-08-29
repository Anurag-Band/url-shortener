import express from "express";
import {
  createUrl,
  getAllUrl,
  deleteUrl,
} from "../controller/shortUrl.controller";

const router = express.Router();

router.post("/shortURL", createUrl);
router.get("/shortURL", getAllUrl);
router.delete("/shortURL/:id", deleteUrl);

export default router;
