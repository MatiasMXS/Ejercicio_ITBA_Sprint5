const express = require("express");
const router = express.Router();
const { getAllPosts, getPost, getPostById} = require("../controllers/llamadas.controller");

router.get("/",  getAllPosts);
router.post("/",  getPost);
router.post("/:id",  getPostById);

module.exports = router;