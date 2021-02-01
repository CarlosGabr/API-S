const config = require('./config/consign');
const conexao = require('./infra/connection')
const tables = require('./infra/tables')
const app = config();

conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('Conectado com sucesso')
        tables.init(conexao)

        
    }

    app.listen(3000, () => console.log('Rodando na porta 3000'));
});
