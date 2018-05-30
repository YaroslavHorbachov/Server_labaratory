const express = require('express');
const router = express.Router();
const apiPositions = '/api/positions';


router.get(`${apiPositions}/addUser`, (req, res) => {
    console.log(req.body);
})
exports.router = router