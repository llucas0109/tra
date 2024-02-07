import * as yup from "yup";
import { v4 } from "uuid";
import { response } from "express";
import Conecao from '../../../config/config.js';

class spectrum_servicos { 
  async store(request, response){
    try {
      Conecao.connect((err) => {
        if (err) {
          console.error('Erro ao conectar ao MySQL:', err);
          return response.status(500).json({ error: 'Erro interno do servidor' });
        } else {
          console.log('Conexão bem-sucedida ao MySQL');
          Conecao.query('SELECT * FROM servicos', (erroConsulta, resultados) => {
            let ArrayReuslt = [];
            if (erroConsulta) {
              console.error('Erro ao executar a consulta:', erroConsulta);
              // Fechar a conexão em caso de erro
              Conecao.end();
              return response.status(500).json({ error: 'Erro interno do servidor' });
            } else {
              
              resultados.forEach(resultado => {
                console.log(resultado.nome);
                console.log(resultado.dataCriacao);
                
                if (typeof resultado !== 'undefined') {
                  ArrayReuslt.push(resultado);
                }
              });
              console.log("ArrayReuslt", typeof ArrayReuslt);

            }

            return response.send(ArrayReuslt)
          });
        }
      });
    } catch (error) {
      console.error('Erro inesperado:', error);
      return response.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}

export default new spectrum_servicos();
