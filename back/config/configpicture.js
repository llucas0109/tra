
import mysql from 'mysql2/promise';

const MAX_RETRIES = 10;
const RETRY_DELAY = 1000; // Milissegundos

export async function createPool() {
  let retryCount = 0;

  while (retryCount < MAX_RETRIES) {
    try {
      const pool = await mysql.createPool({
        host: 'seu-host',
        user: 'seu-usuario',
        password: 'sua-senha',
        database: 'seu-banco-de-dados',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
      });

      return pool;
    } catch (error) {
      console.error('Erro na conexão:', error);
      retryCount++;
      console.log(`Tentativa ${retryCount} de ${MAX_RETRIES}...`);
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
    }
  }

  throw new Error('Falha ao conectar após várias tentativas.');
}

export default createPool