const express = require('express');
const router = express.Router();

router.get('/name', (req, res) => {
    res.status(200).json({name: 'Panda'});
});

module.exports = router