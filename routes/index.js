// api/를 통과하는 router
const express = require('express');
const router = express.Router();

const workRouter = require('./workRoutes');
router.use('/api', workRouter);

module.exports = router;
