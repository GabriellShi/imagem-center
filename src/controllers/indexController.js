const indexController = {
    // Pode retornar uma página ou não
    index: (req, res) => {
        return res.render("index", {title: "Imagem Center", user: req.cookies.user,})
    },
};
module.exports = indexController;