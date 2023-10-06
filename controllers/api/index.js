const router = require('express').Router();

const userRoutes = require('./userroute.js');
const postRoutes = require('./postroute.js');
const commentRoutes = require('./commentroute.js');

//Path: 'api/users' , 'api/posts', 'api/comments'

router.use('/users', userRoutes);//Go to Users Route
router.use('/posts', postRoutes);//Go to Posts Route
router.use('/comments', commentRoutes)//Go to Comments Route

module.exports = router;