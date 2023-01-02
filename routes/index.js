const express = require('express');
const router = express.Router();

const WorkShowRouter = require('./workshow.routes');
router.use('/workshow', WorkShowRouter);

module.exports = router;
