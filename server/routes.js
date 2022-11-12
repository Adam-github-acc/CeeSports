const express = require('express')
const router = express.Router();

const { readAll, readByDate, createMany } = require('./controller')

router.post('/', createMany);

router.get('/', readAll);

router.get('/:sport/:date', readByDate);

module.exports = router;