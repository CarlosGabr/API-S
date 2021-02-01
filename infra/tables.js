class Tables {
    init(conexao) {
        this.conexao = conexao;
    };

    criarCasas() {
        const sql = 'CREATE TABLE casas (id int NOT NULL AUTO_INCREMENT, nome varchar(50), logo_animal varchar(50))'

        this.conexao.query()
    };
}

module.exports = new Tables;