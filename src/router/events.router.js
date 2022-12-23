const express = require('express');
const router = express.Router();

const { show, list, showCategory, send, bring, update, detail, ubicacionRedSocial, favorite, deleteFavorite } = require('../controllers/events.controller')
const { showDistribution } = require('../controllers/distribution.controller')

const {isLoggedIn} = require('../lib/auth')

router.get('/categoryList/:id', isLoggedIn, showCategory)
router.get('/add/:id', isLoggedIn, show)
router.post('/add/:id', isLoggedIn, send)
router.get('/list/', list)
router.post('/list/', favorite)
router.get('/edit/:id', isLoggedIn, bring)
router.post('/edit/', isLoggedIn, update)
router.get('/detail/:id', detail)
router.get('/ubicationEvent/:id', ubicacionRedSocial)
router.get('/localityPass/:id', isLoggedIn, showDistribution)
router.get('/destroy/:id', deleteFavorite)

module.exports = router