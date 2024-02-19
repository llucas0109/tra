import axios from "axios"; // Axios serve para acessar o back end e trocar informaçoes.

const apiServicen8n = axios.create({ // cria uma nova instancia de configuraçoes personalizaveis.
  baseURL:'https://webhook.illuminatenet.com/webhook/af8cd7ff-720e-4327-9f44-62d8d177ae4b '  // url que o axios se conectara 
})

export default apiServicen8n