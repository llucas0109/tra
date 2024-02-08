import { FunkyContainer,
  VibrantBox,
  DynamicWrapper,
  QuirkySection, 
  ColorfulPanel,
  Servicos,
  ItemList,
  ListContainer,
  PictureContainer,
  ContainerScroll,
  ContainerImages
} 
from './style';
import { useEffect, useState } from 'react';
import apiService from '../services/api.js';
import { bool } from 'prop-types';

const App = () => {
  const [service,setservice] = useState([])
  const [work,setwork] = useState([])
  const [files,setfiles] = useState([])
  const [picture,setpicture] = useState([])

  useEffect(() => {
    async function loadStartServicos() {
      const { data } = await apiService.get('/servicos');
      setservice(data) // Atualizando o useState
    }
    loadStartServicos() // Chamando a funçao para q ela possa ser executado

  }, [])

  async function loadServicos(prop) {
    console.log('prop  ',prop);
    if(prop != undefined){
    const segundoNivel = document.getElementById(`${prop}`)
    if(segundoNivel.style.display == 'none' ){
      segundoNivel.style.display = 'block';
    }else{
      segundoNivel.style.display = 'none';
    }
    const { data } = await apiService.post('/servicos',{Prop:prop});
    setwork(data)
    }
  }
    async function loadServicoswk(prop,ipes) {
      if(ipes != undefined){
        const segundoNivel = document.getElementById(`${ipes}`)
        if(segundoNivel.style.display == 'none' ){
          segundoNivel.style.display = 'block';
        }else{
          segundoNivel.style.display = '';
        }
        const { data } = await apiService.post('/servicos',{Prop:prop,Ipes:ipes});
        setfiles(data)
      }
    }
    async function loadServicosfoto(ipes,dop) {
      console.log("dop recebido",dop);
      // if(dop != undefined){
      //   const segundoNivel = document.getElementById(`${dop}`)
      //   if(segundoNivel.style.display == 'none' ){
      //     segundoNivel.style.display = 'flex';
      //   }else{
      //     segundoNivel.style.display = 'none';
      //   }
      // }
      const { data } = await apiService.post('/servicos/fotos',{Mapa:ipes,Foto:dop});
        setpicture(data)
    }

  console.log("dados picture",picture);
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
          <ColorfulPanel onClick={() => loadServicoswk(ser.nome,wk.nome)}>
            {wk.nome}
          </ColorfulPanel>
          {/* ---------------------------------------------- */}
          </>
        ))}</QuirkySection>

        </>
      ))} 

      </VibrantBox>


      <DynamicWrapper>
        <ContainerScroll>
          {work && work.map(wk => (
          <ItemList id={wk.nome} style={{display: 'none'}}>
              {files && files.map(file => (
                <>
                <ListContainer onClick={() => loadServicosfoto(wk.nome,file.nome)}>
                  {file.nome}
                </ListContainer>
                </>
              ))}
          </ItemList>
          ))}
        </ContainerScroll>
        <ContainerImages>
          {picture && picture.map(picture => (
            <PictureContainer AtrPicture = {picture.foto}>
              
            </PictureContainer>
          ))}
        </ContainerImages>
      </DynamicWrapper>
    </FunkyContainer>  
  )
}

export default App