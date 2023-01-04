const express = require("express");
const router = express.Router();

const UserReviewController = require("../controllers/userReviewController")
const userReviewController = new UserReviewController();

router.post("/review",userReviewController.writeReview);



module.exports = router;
