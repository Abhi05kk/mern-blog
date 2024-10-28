const {Router} = require('express')

const {registerUser, loginUser, getUser, changeAvatar, edituser, getAuthors} = require 
("../controllers/userControllers")
const authMiddleware = require('../middleware/authMiddleware')

const router = Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/:id', getUser)
router.get('/', getAuthors)
router.post('/change-avatar', authMiddleware, changeAvatar)
router.patch('/edit-User', authMiddleware, edituser)

module.exports = router