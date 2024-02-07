import { Router } from 'express';
import  express from 'express';
import cors from 'cors';
import servicos from './App/Controlers/Servicos.js';

const app = express()
app.use(cors())

const rota = new Router()

rota.get('/servicos', servicos.store)
rota.post('/servicos', servicos.index)

export default rota