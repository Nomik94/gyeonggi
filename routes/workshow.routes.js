const express = require('express');
const router = express.Router();

const WorkshowController = require('../controllers/workshow.controller');
const workshowController = new WorkshowController();

router.get('/', workshowController.getWork);
// router.post('/', workshowController.createPost);

module.exports = router;