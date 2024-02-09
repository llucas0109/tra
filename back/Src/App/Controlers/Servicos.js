import * as yup from "yup";
import { v4 } from "uuid";
import { response } from "express";
import Conecao from '../../../config/config.js';

class servicos { 
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
  async index (request, response){ //  where dataConclusao = ${Data}
    const {Prop} = await request.body
    const {Ipes} = await request.body
    const {Dop} = await request.body
    // const sobremenome = 
    console.log("Dados recebidos Prop",Prop);
    console.log("Dados recebidos Ipes",Ipes);
    console.log("Dados recebidos Dop",Dop);
    let dados = '';
    if(Ipes == undefined){
      dados = Prop + '_servicos'
    }else{
      dados = Prop + '_' + Ipes + ' where dataConclusao is not null order by dataConclusao desc';  // desk determina que a ordem e contraria da primeira a ultiama.
    }
    console.log("dados de coneçao:  ",dados);
    try {
      Conecao.connect((err) => {
        if (err) {
          console.error('Erro ao conectar ao MySQL:', err);
          return response.status(500).json({ error: 'Erro interno do servidor' });
        } else {
          console.log('Conexão bem-sucedida ao MySQL');
          Conecao.query(`SELECT * FROM ${dados}`, (erroConsulta, resultados) => {
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
  async data (request, response){ //  where dataConclusao = ${Data}
    const {Data} = await request.body
    const {Wk} = await request.body
    const {DataInput} = await request.body

    console.log("Data,Wk,DataInput",Data,Wk,DataInput);
    // Data:prop,Wk:ipes,DataInput:dataref

    console.log(Data);
    try {
      Conecao.connect((err) => {
        if (err) {
          console.error('Erro ao conectar ao MySQL:', err);
          return response.status(500).json({ error: 'Erro interno do servidor' });
        } else {
          console.log('Conexão bem-sucedida ao MySQL');
          Conecao.query(`SELECT * FROM ${Wk} WHERE dataConclusao = ${Data}`, (erroConsulta, resultados) => {
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
  async picture (request, response){
    const {Mapa} = await request.body
    const {Foto} = await request.body
    // const sobremenome = 
    console.log("Dados recebidos Mapa",Mapa);
    console.log("Dados recebidos Foto",Foto);
    console.log("Foto a procurar", Mapa + Foto);
    try {
      Conecao.connect((err) => {
        if (err) {
          console.error('Erro ao conectar ao MySQL:', err);
          return response.status(500).json({ error: 'Erro interno do servidor' });
        } else {
          console.log('Conexão bem-sucedida ao MySQL');
          Conecao.query(`SELECT * FROM fotos WHERE mapa = '${Mapa}' AND servico_id = '${Foto}'`, (erroConsulta, resultados) => {
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
              console.log("ArrayReuslt", ArrayReuslt);

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
export default new servicos();
