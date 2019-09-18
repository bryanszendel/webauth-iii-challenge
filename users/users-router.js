const router = require('express').Router();

const Users = require('../users/users-model.js');
const restricted = require('../auth/restricted-middleware.js')

// ENDPOINTS

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      res.status(500).json({ message: 'Error retrieving the users.' })
    })
})

module.exports = router;