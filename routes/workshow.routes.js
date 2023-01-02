const express = require('express');
const router = express.Router();

const WorkShowController = require('../controllers/workshow.controller');
const workShowController = new WorkShowController();

router.get('/', workShowController.getWork);
router.post('/', workShowController.createPost);

module.exports = router;