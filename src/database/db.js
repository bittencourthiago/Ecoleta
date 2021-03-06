const sqlite3 = require('sqlite3').verbose();


//criando obj de db
const db = new sqlite3.Database('./src/database/database.db');

module.exports = db;

//usando obj do db para operações
db.serialize(()=> {
  /*
    //criar tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `);


    //inserir dados na tabela
    const query =`
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    
    `;
    const values = [
        'https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        'Papersider',
        'Guilherme Gemballa, Jardim América',
        'nº 260',
        'Santa Catarina',
        'Rio do Sul',
        'Resíduos Eletrônicos, Lâmpadas'

    ];
    function afterInsertData(err) {
        if(err) {
            return console.log(err);
        }

        console.log('Cadastrado com sucesso');
        console.log(this);
    }

    db.run(query, values, afterInsertData);

    //consultar dados da tabela
    db.all(`SELECT * FROM  places;`, function(err, rows) {
        if(err) {
            return console.log(err);
        }
        console.log('Aqui estão seus registros');
        console.log(rows);
    })
    
    //deletar dado da tabela
    //deletar da tabela onde o id =1
    function deleteItem(id) {
        db.run(`DELETE FROM places WHERE id = ?`, [id], function(err) {
            if(err){
                return console.log(err);
            }
            console.log('Registros deletados com sucesso');
        })
    }
    deleteItem(5);
    */
});
