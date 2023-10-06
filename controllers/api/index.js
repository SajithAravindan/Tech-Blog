const router = require('express').Router();

const userRoutes = require('./userroute.js');
const postRoutes = require('./postroute.js');
const commentRoutes = require('./commentroute.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes)

module.exports = router;