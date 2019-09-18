const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model.js');
// const secrets = require('../config/secrets.js')

// ENDPOINTS

router.post('/register', (req, res) => {

})

module.exports = router;