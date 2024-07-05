const express = require("express");
const UserController = require("../Controller/User.Controller");
const NewsController = require("../Controller/News.Controller");
const router = express.Router();
const upload = require("../Middlewares/Image");
const checkuserauthecated = require('../Middlewares/authMiddlewares');

// // Authentecation Routes
router.post("/register", UserController.Register);
router.post("/login", UserController.Login);

// // News Routes
router.post("/create",upload.single("image"),checkuserauthecated, NewsController.AddNews);
router.get("/get",checkuserauthecated, NewsController.getAllNews);
router.delete("/delete/:id",checkuserauthecated, NewsController.DeletePost);
router.get("/getone/:id",checkuserauthecated, NewsController.GetOneNews);
router.put("/update/:id",checkuserauthecated, NewsController.UpdatePost);

module.exports = router;