const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware');
const WorkShowController = require('../controllers/workshow.controller');
const workShowController = new WorkShowController();

router.get('/', workShowController.getWork);
module.exports = router;
