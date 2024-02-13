import * as yup from "yup";
import { v4 } from "uuid";
import { response } from "express";
import Conecao from '../../../config/config.js';

class servicos { 
  async store(request, response) {
    try {
      const pool = Conecao(); // Crie o pool de conexões
  
      const [resultados] = await pool.promise().query('SELECT * FROM servicos');
  
      let ArrayReuslt = [];
  
      resultados.forEach(resultado => {
        console.log(resultado.nome);
        console.log(resultado.dataCriacao);
  
        if (typeof resultado !== 'undefined') {
          ArrayReuslt.push(resultado);
        }
      });
  
      console.log("ArrayReuslt", typeof ArrayReuslt);
  
      return response.send(ArrayReuslt);
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
      const pool = Conecao(); // Crie o pool de conexões
  
      const [resultados] = await pool.promise().query(`SELECT * FROM ${dados}`);
  
      let ArrayReuslt = [];
  
      resultados.forEach(resultado => {
        console.log(resultado.nome);
        console.log(resultado.dataCriacao);
  
        if (typeof resultado !== 'undefined') {
          ArrayReuslt.push(resultado);
        }
      });
  
      console.log("ArrayReuslt", typeof ArrayReuslt);
  
      return response.send(ArrayReuslt);
    } catch (error) {
      console.error('Erro inesperado:', error);
      return response.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
  async data(request, response) {
    const {Wk, DataInput } = request.body;
  
    console.log("Wk, DataInput :   ", Wk, DataInput);
  
    try {
      const pool = Conecao(); // Crie o pool de conexões mantendo a coneçao aberta
  
      const [resultados] = await pool.promise().query(`SELECT * FROM ${Wk} WHERE dataConclusao = ?`, [DataInput]);
  
      let ArrayReuslt = [];
  
      resultados.forEach(resultado => {
        console.log(resultado.nome);
        console.log(resultado.dataCriacao);
  
        if (typeof resultado !== 'undefined') {
          ArrayReuslt.push(resultado);
        }
      });
  
      console.log("ArrayReuslt", typeof ArrayReuslt);
  
      return response.send(ArrayReuslt);
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
      const pool = Conecao(); // Crie o pool de conexões
  
      const [resultados] = await pool.promise().query(`SELECT * FROM fotos WHERE mapa = ? AND servico_id = ?`, [Mapa, Foto]);
  
      let ArrayReuslt = [];
  
      resultados.forEach(resultado => {
        console.log(resultado.nome);
        console.log(resultado.dataCriacao);
  
        if (typeof resultado !== 'undefined') {
          ArrayReuslt.push(resultado);
        }
      });
  
      console.log("ArrayReuslt", ArrayReuslt);
  
      return response.send(ArrayReuslt);
    } catch (error) {
      console.error('Erro inesperado:', error);
      return response.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}
export default new servicos();
