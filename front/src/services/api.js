import axios from "axios"; // Axios serve para acessar o back end e trocar informaçoes.

const apiService = axios.create({ // cria uma nova instancia de configuraçoes personalizaveis.
  baseURL:'http://usaback.illuminatenet.com'  // url que o axios se conectara 
})

export default apiService