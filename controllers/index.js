const router = require('express').Router();//Router
const apiRoute = require('./api');//Home Route
const homeRoute = require('./homeroute.js');//Home Route
const dashBoardRoute = require('./dashboardroute.js');//Home Route

//Path: '/'

router.use('/api', apiRoute);//API Route
router.use('/dashboard',dashBoardRoute)//Dashboard Route
router.use('/', homeRoute);//Home Route

module.exports = router;