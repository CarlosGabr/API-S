class Tables {
    init(conexao) {
        this.conexao = conexao;

        this.criarCasas()
    };

    criarCasas() {
        const sql = 'CREATE TABLE IF NOT EXISTS casas (id int NOT NULL AUTO_INCREMENT, nome varchar(50), PRIMARY KEY (id))'

        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            } else {
                console.log('Tabela casas criada com sucesso!')
            }
        })
    };
}

module.exports = new Tables;