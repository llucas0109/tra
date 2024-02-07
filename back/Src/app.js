import express from 'express'
import rota from './route.js'; 
import cors from 'cors'

class App{ 
  constructor(){
    this.app = express()
    this.app.use(cors())
    this.app.use(express.json());
    this.route()
  } 
  route(){
    this.app.use(rota) 
  }

}

//module.exports = { App } 

export default new App() // new cria um novo App() onde sera importado podendo por suas proprias configuraçoes
