const casinha = require('../models/casas')

module.exports = (app) => {
    app.get('/casas', (req, resp) => {
        resp.send('<h1>Casas de Game of Thrones</h1>')
    });

    app.post('/casas2', (req, resp) => {
        const casa = req.body
        casa.adiciona(casas)
        resp.send('Você está acessando o post, onde vai colocar o nome de suas casa.')
    })
};
