const express = require('express')
const router = express.Router()

const prisonerController = require('../controllers/prisonerController')
//this file is in the ocntrollers folder

// get all list of prisoners
router.get('/prisoners', prisonerController.prisoners)
//http://localhost:4000/p/prisoners - all

router.get('/prisoner/:id', prisonerController.prisoner)
//http://localhost:4000/p/prisoner/1 - by id

router.get('/greet/person', prisonerController.greet)
// http://localhost:4000/p/greet/person?name=test - by person


router.get('/search/prisoner', prisonerController.searchPrisoner)
//http://localhost:4000/p/search/prisoner?id=1&name=Mateo

module.exports = router;