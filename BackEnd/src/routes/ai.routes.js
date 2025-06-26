const express = require('express');
const aiController = require("../controllers/ai.controller")

const router = express.Router();


router.post("/get-review", aiController.getReview)
router.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});


module.exports = router;    