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
  ContainerImages,
  ContainerSerach,
  Container,
  InputData,
  InputSerach,
  Serch,
  BottonSerch
} 
from './style';
import { useEffect, useState } from 'react';
import apiService from '../services/api.js';
import { bool } from 'prop-types';
import { useRef } from 'react'; 

const App = () => {
  const [service,setservice] = useState([])
  const [work,setwork] = useState([])
  const [files,setfiles] = useState([])
  const [picture,setpicture] = useState([])

  const inputRef = useRef(null);
  
  const dataref = useRef(null);
  
  const handleChange = () => {
    const text = inputRef.current.value
    const seach = files.filter(file => file.nome == text)
    setfiles(seach)
  };

  const dataFilter = (event) => {
    const novaData = event.target.value;  dataCompleta.split('T')
    const seach = files.filter(file => console.log(file.dataCadastro)  == novaData)
    setfiles(seach)
  };

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
        const SomenteData = data.filter(data => data.dataConclusao != null)
        console.log("filtrar onde nao tem data de conclusao",SomenteData);
        setfiles(SomenteData)
      }
    }
    async function loadServicosfoto(ipes,dop) {
      console.log("dop recebido",dop);
      const { data } = await apiService.post('/servicos/fotos',{Mapa:ipes,Foto:dop});
      setpicture(data)
    }

    const keyDownHandler = event => {
      console.log('User pressed: ', event.key);

      if (event.key === 'Enter') {
        event.preventDefault();

        handleChange()
      }
    };

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
      <ContainerSerach>
        <Container>
          <InputData type='date' ref={dataref} onChange={dataFilter}></InputData>
          <Serch>
            <InputSerach placeholder='Digite algo para pequisar' ref={inputRef} onKeyDown={keyDownHandler}></InputSerach>
            <BottonSerch onClick={handleChange}><span class="material-symbols-outlined">search</span></BottonSerch>
          </Serch>
        </Container>
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
              <PictureContainer $AtrPicture = {picture.foto}>

              </PictureContainer>
            ))}
          </ContainerImages>
        </DynamicWrapper>
        </ContainerSerach>
    </FunkyContainer>  
  )
}

export default App