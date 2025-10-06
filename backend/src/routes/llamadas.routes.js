const express = require("express");
const router = express.Router();
const { getAllPosts, createPost, createComment} = require("../controllers/llamadas.controller");

router.get("/",  getAllPosts);
router.post("/",  createPost);
router.post("/:id/comments",  createComment);

module.exports = router;