const express = require('express')

const router = express()
const cotroller = require('../controller/controller')

router.get('/apiCall', cotroller.api);

router.get('/apiFetch',cotroller.getComments)