const casasController = require('../Controllers/casas-controller');
const conexao = require('../infra/connection')

class Casas {
    adiciona(casas) {
        const sql = 'INSERT INTO casas SET ?'

        conexao.query(sql, casas, (erro, resultados) => {
            if(erro){
                console.log(erro);
            } else{
                console.log(resultados)
            }
        })
    }
}

module.exports = new casasController