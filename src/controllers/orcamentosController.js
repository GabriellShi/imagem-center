

const orcamentosController = {
    // Pode retornar uma página ou não
    index: (req, res) => {
        return res.render("orcamento", {title: "Orçamento", user: req.cookies.user,})
    },

    viewContato: (req, res) => {
        res.render('contato', { title: "Contato", user: req.cookies.user, });
    },

    viewBannerFaixa: (req, res) => {
        res.render('banner-faixa', { title: "Orçamento Banner e Faixa", user: req.cookies.user, });
    },

    viewCopiaProjetos: (req, res) => {
        res.render('copia-projetos', { title: "Orçamento de Cópia de Projetos", user: req.cookies.user, });
    },

    viewCopia: (req, res) => {
        res.render('copia', { title: "Orçamento de Cópias", user: req.cookies.user, });
    },

    viewCriacaoDeArte: (req, res) => {
        res.render('criacao-de-arte', { title: "Orçamento Criação de Arte", user: req.cookies.user, });
    },

    viewDigitalizacao: (req, res) => {
        res.render('digitalizacao', { title: "Orçamento Digitalizacao", user: req.cookies.user, });
    },

    viewEncadernacao: (req, res) => {
        res.render('encadernacao', { title: "Orçamento Encadernacao", user: req.cookies.user, });
    },

    viewImpressaoProjetos: (req, res) => {
        res.render('impressao-projetos', { title: "Orçamento de Impressão de Projetos", user: req.cookies.user, });
    },

    viewImpressao: (req, res) => {
        res.render('impressao', { title: "Orçamento de Impressão", user: req.cookies.user, });
    },

    viewPlastificacao: (req, res) => {
        res.render('plastificacao', { title: "Orçamento de Plastificação", user: req.cookies.user, });
    },
    

    

};

module.exports = orcamentosController;