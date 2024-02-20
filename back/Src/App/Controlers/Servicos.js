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
    const { Mapa, Foto, Commit } = request.body;
  
    console.log("Dados recebidos Mapa", Mapa);
    console.log("Dados recebidos Foto", Foto);
    console.log("Foto a procurar", Mapa + Foto);

    console.log("Commit      ",Commit);
  
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

}
export default new servicos();