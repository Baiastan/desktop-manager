import express from "express";
import { getLinks, addLink, deleteLink } from "../controllers/links.js";
const router = express.Router();

router.get("/links", getLinks);
router.post("/links", addLink);
router.delete("/links/:id", deleteLink);

export default router;
