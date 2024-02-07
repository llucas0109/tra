import { FunkyContainer, VibrantBox, DynamicWrapper, QuirkySection, ColorfulPanel,Servicos,ItemList,ListContainer} from './style';
import { useEffect, useState } from 'react';
import apiService from '../services/api.js';
import { bool } from 'prop-types';

const App = () => {
  const [service,setservice] = useState([])
  const [work,setwork] = useState([])
  const [files,setfiles] = useState([])

  useEffect(() => {
    async function loadStartServicos() {
      const { data } = await apiService.get('/servicos');
      setservice(data) // Atualizando o useState
    }
    loadStartServicos() // Chamando a funçao para q ela possa ser executado

  }, [])
  async function loadServicos(prop,ipes) {
    console.log('prop  ',prop,'  ','ipes  ', ipes);
    if(ipes == undefined){
    const segundoNivel = document.getElementById(`${prop}`)
    if(segundoNivel.style.display == 'none' ){
      segundoNivel.style.display = 'block';
    }else{
      segundoNivel.style.display = 'none';
    }
    const { data } = await apiService.post('/servicos',{Prop:prop});
    setwork(data)
    }
    if(ipes != undefined){
      const segundoNivel = document.getElementById(`${ipes}`)
      if(segundoNivel.style.display == 'none' ){
        segundoNivel.style.display = 'block';
      }else{
        segundoNivel.style.display = 'none';
      }
      const { data } = await apiService.post('/servicos',{Prop:prop,Ipes:ipes});
      setfiles(data)
    }
    
    
  }
  

  console.log("dados no work",work);
  return(
    <FunkyContainer>
      <VibrantBox> 
        {service && service.map( ser => (
        <>
        <Servicos onClick={() =>loadServicos(ser.nome)}>
          {ser.nome}
        </Servicos>
        <QuirkySection id={ser.nome} style={{display: 'none'}}>{work && work.map(wk => (
          <>
          <ColorfulPanel onClick={() => loadServicos(ser.nome,wk.nome)}>
            {wk.nome}
          </ColorfulPanel>
          <ItemList id={wk.nome} style={{display: 'none'}}>
           {files && files.map(file => (
              <ListContainer>{file.nome}</ListContainer>
           ))}
          </ItemList>
          {/* ---------------------------------------------- */}
          
          </>
        ))}</QuirkySection>

        </>
      ))} 

      </VibrantBox>

      <DynamicWrapper>
        
      </DynamicWrapper>
    </FunkyContainer>  
  )
}

export default App