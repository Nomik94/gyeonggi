const express = require('express');
const router = express.Router();

const workshowRouter = require('./workshow.routes');
router.use('/workshow', workshowRouter);

module.exports = router;
