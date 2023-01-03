const express = require('express');
const router = express.Router();

const UpdateWorkController = require('../controllers/updateWork.controller');
const updateWorkController = new UpdateWorkController();

// router.get('/', updateWorkController.getWork);
router.post('/', updateWorkController.updateWork);

module.exports = router;
