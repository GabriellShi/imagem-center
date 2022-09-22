const express = require('express');
const router = express.Router();

// Controllers
const orcamentosControlller = require('../controllers/orcamentosController');


router.get("/orcamento", orcamentosControlller.index);

router.get("/contato", orcamentosControlller.viewContato);

router.get("/banner-faixa", orcamentosControlller.viewBannerFaixa);

router.get("/copia-projetos", orcamentosControlller.viewCopiaProjetos);

router.get("/copia", orcamentosControlller.viewCopia);

router.get("/criacao-de-arte", orcamentosControlller.viewCriacaoDeArte);

router.get("/digitalizacao", orcamentosControlller.viewDigitalizacao);

router.get("/encadernacao", orcamentosControlller.viewEncadernacao);

router.get("/impressao-projetos", orcamentosControlller.viewImpressaoProjetos);

router.get("/impressao", orcamentosControlller.viewImpressao);

router.get("/plastificacao", orcamentosControlller.viewPlastificacao);

module.exports = router;