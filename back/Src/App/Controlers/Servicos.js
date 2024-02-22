import Conecao from '../../../config/config.js';

class servicos { 
  async store(request, response) {
    try {
      const conexao = await Conecao(); // Aguarde a conexão ser estabelecida
  
      const query = 'SELECT * FROM servicos';
      conexao.query(query, (error, resultados) => {
        if (error) {
          conexao.end();
          throw error;
        }
  
        let ArrayResult = [];
  
        resultados.forEach((resultado) => {
          console.log(resultado.nome);
          console.log(resultado.dataCriacao);
  
          if (typeof resultado !== 'undefined') {
            ArrayResult.push(resultado);
          }
        });
  
        console.log("ArrayResult", ArrayResult);
        conexao.end();
        return response.send(ArrayResult);
      });
    } catch (error) {
      console.error('Erro inesperado:', error);
      return response.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
  
  async index(request, response) {
    const { Prop, Ipes } = request.body;
  
    console.log("Dados recebidos Prop", Prop);
    console.log("Dados recebidos Ipes", Ipes);
  
    let dados = '';
    if (Ipes == undefined) {
      dados = Prop + '_servicos';
    } else {
      dados = Prop + '_' + Ipes + ' where dataConclusao is not null order by dataConclusao desc'; 
    }
  
    console.log("dados de conexão:  ", dados);
  
    try {
      const conexao = await Conecao(); // Aguarde a conexão ser estabelecida
  
      const query = `SELECT * FROM ${dados}`;
      conexao.query(query, (error, resultados) => {
        if (error) {
          conexao.end();
          throw error;
        }
  
        let ArrayResult = [];
  
        resultados.forEach((resultado) => {
          console.log(resultado.nome);
          console.log(resultado.dataCriacao);
  
          if (typeof resultado !== 'undefined') {
            ArrayResult.push(resultado);
          }
        });
  
        console.log("ArrayResult", ArrayResult);
        conexao.end();
        return response.send(ArrayResult);
      });
    } catch (error) {
      console.error('Erro inesperado:', error);
      return response.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
  
  async data(request, response) {
    const { Wk, DataInput } = request.body;
  
    console.log("Wk, DataInput :   ", Wk, DataInput);
  
    try {
      const coneccao = await Conecao(); // Aguarde a conexão ser estabelecida
  
      const query = `SELECT * FROM ${Wk} WHERE dataConclusao = ?`;
      const [resultados] = await coneccao.query(query, [DataInput]);
  
      let ArrayResult = [];
  
      resultados.forEach(resultado => {
        console.log(resultado.nome);
        console.log(resultado.dataCriacao);
  
        if (typeof resultado !== 'undefined') {
          ArrayResult.push(resultado);
        }
      });
  
      console.log("ArrayResult", typeof ArrayResult);
      coneccao.end();
      return response.send(ArrayResult);
    } catch (error) {
      console.error('Erro inesperado:', error);
      return response.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
  
  async picture(request, response) {
    const { Mapa, Foto } = request.body;
  
    console.log("Dados recebidos Mapa", Mapa);
    console.log("Dados recebidos Foto", Foto);
    console.log("Foto a procurar", Mapa + Foto);
  
    try {
      const coneccao = await Conecao(); // Aguarde a conexão ser estabelecida
  
      const query = `SELECT * FROM fotos WHERE mapa = ? AND servico_id = ?`;
      const [resultados] = await coneccao.promise().query(query, [Mapa, Foto]);
  
      let ArrayResult = [];
  
      resultados.forEach(resultado => {
        console.log(resultado.nome);
        console.log(resultado.dataCriacao);
  
        if (typeof resultado !== 'undefined') {
          ArrayResult.push(resultado);
        }
      });
  
      console.log("ArrayResult", ArrayResult);
      coneccao.end();
      return response.send(ArrayResult);
    } catch (error) {
      console.error('Erro inesperado:', error);
      return response.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
  
  async sql(request, response) {
    const {Data} = request.body
    
    console.log("Dados recebidos dddddata ", Data);
    fetch('https://webhook.illuminatenet.com/webhook/af8cd7ff-720e-4327-9f44-62d8d177ae4b', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // Outros cabeçalhos, se necessário
        },
        body: JSON.stringify({  // array
          Data: Data
          // Seus dados aqui
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Resposta da requisição:', data);
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
      });
  }
  async commit(request, response) {
    const { Conect, Commit } = request.body;
  
    console.log("Dados recebidos Conect", Conect);
    console.log("Dados recebidos Commit", Commit);
  
    let dados = Conect[0] + '_' + Conect[1];
  
    console.log("dados de conexão:  ", dados);
  
    try {
      const conexao = await Conecao(); // Aguarde a conexão ser estabelecida
  
      const query = `UPDATE ${dados} SET commit = ? WHERE nome = ?`;
      await conexao.promise().query(query, [Commit, Conect[2]]);
      
      // Supondo que você está usando um ORM ou uma biblioteca de acesso a banco de dados
  
      // Se estiver usando raw SQL com algum módulo de banco de dados, você deve executar a query
      // await conexao.execute(query, [Commit, Conect[2]]);
  
      // ...
  
      // Feche a conexão após a conclusão da operação
      await conexao.close();
  
      // Envie uma resposta de sucesso
      return response.status(200).json({ message: 'Dados atualizados com sucesso' });
    } catch (error) {
      console.error('Erro inesperado:', error);
      return response.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
  

}
export default new servicos();