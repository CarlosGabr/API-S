module.exports = (app) => {
    app.get('/casas', (req, resp) => {
        resp.send('<h1>Casas de Game of Thrones</h1>')
    });

    app.post('/casas', (req, resp) => {
        console.log(req.body);
        resp.send('Você está acessando o post, onde vai colocar o nome de suas casa.')
    })
};