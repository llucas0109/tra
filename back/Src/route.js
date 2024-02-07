import { Router } from 'express';
import  express from 'express';
import cors from 'cors';
import servicos from './App/Controlers/Servicos.js';
import brightspeed_servicos from './App/Controlers/brightspeed_servicos.js';
import spectrum_servicos from './App/Controlers/spectrum_servicos.js';

const app = express()
app.use(cors())

const rota = new Router()

rota.get('/servicos', servicos.store)
rota.get('/brightspeed_servicos', brightspeed_servicos.store)
rota.get('/spectrum_servicos', spectrum_servicos.store)

export default rota
