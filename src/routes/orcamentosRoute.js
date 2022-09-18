const express = require('express');
const router = express.Router();

// Controllers
const orcamentosControlller = require('../controllers/orcamentosController');

router.get("/orcamento", orcamentosControlller.index);

module.exports = router;