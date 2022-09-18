const orcamentosController = {
    // Pode retornar uma página ou não
    index: (req, res) => {
        return res.render("orcamento", {title: "Orçamento", user: req.cookies.user,})
    },
};
module.exports = orcamentosController;