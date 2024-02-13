// conexao.js
import mysql from 'mysql2';

function Conecao() { 
  const conexao = mysql.createPool({
    host: '157.90.238.176',
    user: 'root',
    password: 'poMY9zHgbaN9Aier',
    database: 'servicos',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
  return conexao;
}

export default Conecao;
