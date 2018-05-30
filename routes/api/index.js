const express = require('express');
const router = express.Router();
const apiPositions = '/api/positions';

router.get(`${apiPositions}/addUser`, (req, res) => {
    console.log(req.body);
})

router.post(`${apiPositions}/addUser`, (req, res) => {
    console.log(req);
    res.json({ status: 'Done ' })
})

exports.router = router