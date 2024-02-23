// conexao.js
// docker run --name percona -e MYSQL_ROOT_PASSWORD=xghTCrCcXPTuLL9iaACE -p 3306:3306 -d percona
// Nesse caso para fazer a migraçao de dados e acesso ao servidor usamos os dados de conecçao que roda o "servidor". que tem o docker.
// docker exec -it percona mysql -u root -p    Para Poder acessar o container mysql para cria um banco de dados.
// docker update --restart always f19e3561cb87   sempre que cair ele restarta
import mysql from 'mysql2';

async function Conecao() {
  return new Promise((resolve, reject) => {
    const conexao = mysql.createConnection({
      host: '5.161.118.138',
      user: 'root',
      password: 'xghTCrCcXPTuLL9iaACE',
      database: 'servicos',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    conexao.connect((err) => {
      if (err) {
        reject(err);
      } else {
        resolve(conexao);
      }
    });
  });
}
  // docker run --name Percona_Server -e percona_PASSWORD=9jEq3dcThNRLwJXqJVFP -p 7777:7777 -d percona
export default Conecao;
