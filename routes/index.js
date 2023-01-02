const express = require('express');
const router = express.Router();

const WorkShowRouter = require('./workshow.routes');
const UpdateWorkRouter = require('./updateWork.routes');
router.use('/workshow', [WorkShowRouter, UpdateWorkRouter]);

router.use('/updatework', UpdateWorkRouter);

module.exports = router;
