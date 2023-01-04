const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth-middleware');
const BossPageController = require('../controllers/bossPage.controller');
const bossPageController = new BossPageController();

router.get('/', authMiddleware, bossPageController.getStartWork);
module.exports = router;
