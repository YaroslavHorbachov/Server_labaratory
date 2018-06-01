const express = require('express');
const router = express.Router();
const apiPositions = '/api/positions';
const positionsController = require('../../controllers/positions/index')
const bodyParser = require('body-parser');

router.get(`${apiPositions}/users`, (req, res) => {
    console.log(req.body);
})

router.post(`${apiPositions}/addUser`, (req, res) => {
    positionsController.addUser(req, res)
})

router.post(`${apiPositions}/updateUser`, (req, res) => {
    console.log(req);
    res.json({ status: 'Done ' })
})

exports.router = router