const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware');

const UpdateWorkController = require('../controllers/updateWork.controller');
const updateWorkController = new UpdateWorkController();

// router.get('/', updateWorkController.getWork);
router.post('/', authMiddleware, updateWorkController.updateWork);

module.exports = router;
