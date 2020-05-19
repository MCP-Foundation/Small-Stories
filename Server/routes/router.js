const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const userController = require('../controllers/Users');
const postController = require('../controllers/Posts');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(cookieParser());

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cookieParser());

// Remember to compartmentalize file structure.

// /**  GET'S **/
// router.get('/api/users', (req, res) => userController.getAll);
router.get('/api/forum', postController.getAllPosts);

// /** POST'S **/
router.post('/api/register', userController.register);
router.post('/api/login', userController.login);
router.post('/api/logout', userController.logout);
router.post('/api/posts', userController.authenticate, postController.createPost);

// /** PUT'S **/
// router.put('/api/users/:userId', /* userController.update */);
router.put('/api/posts/:postId', postController.updatePosts);

// /** DELETE'S **/
// router.delete('/api/users/:userId', /* userController.delete */);
router.delete('/api/posts/:postId', postController.deletePosts);

module.exports = router;