const express = require('express');
const { createUser, getUser, updateUser, deleteUser, getUserById } = require('../controllers/userController');

const router = express.Router();

router.post('/', createUser);
router.get('/', getUser);
router.get('/:id', getUserById);
router.post('/:id',updateUser);
router.post('/delete/:id',deleteUser);

module.exports = router;