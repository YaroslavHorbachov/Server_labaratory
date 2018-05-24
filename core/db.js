const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
exports.db = mongoose.connection;