import axios from "axios"; // Axios serve para acessar o back end e trocar informaçoes.

const apiServicen8n = axios.create({ // cria uma nova instancia de configuraçoes personalizaveis.
  baseURL:''  // url que o axios se conectara 
})

export default apiServicen8n