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
  BottonSerch,
  Expanding,
  ContenedorExpand,
  Button
} 

from './style';
import { useEffect, useState } from 'react';
import apiService from '../services/api.js';
import { bool } from 'prop-types';
import { useRef } from 'react'; 
import { Button } from '@mui/material';

const App = () => {
  const [service,setservice] = useState([])
  const [work,setwork] = useState([])
  const [files,setfiles] = useState([])
  const [picture,setpicture] = useState([])
  const [click,setclick] = useState(0)
  const [expandimage,setexpandimage] = useState(0)
  const [contdata,setcontdata] = useState(0)

  const inputRef = useRef(null);
  
  const dataref = useRef(null);
  
  const handleChange = () => {
    const text = inputRef.current.value
    const seach = files.filter(file => file.nome == text)
    setfiles(seach)
  };

   async function dataFilter(ipes) {
    console.log("contdata   ",contdata);
    setfiles(contdata)
    const dataInput = dataref.current.value
    // const Ipes = ipes.target.value
    // const { data } = await apiService.post('/servicos/data',{Data:dataInput,Wk:Ipes});
    // setfiles(data)
  };
  // if(click != 0 && click != prop ){
  //   const Nivel = document.getElementById(`${click}`)
  //   Nivel.style.display == 'none' 
  // }

  useEffect(() => {
    async function loadStartServicos() {
      const { data } = await apiService.get('/servicos');
      setservice(data) // Atualizando o useState
    }
    loadStartServicos() // Chamando a funçao para q ela possa ser executado

  }, [])

  async function loadServicos(prop) {
    console.log('prop  ',prop);
    if(click != 0 && click != prop){
      const Nivel = document.getElementById(`${click}`)
      Nivel.style.display = 'none'; 
    }
    if(prop != undefined){
    const segundoNivel = document.getElementById(`${prop}`)
    if(segundoNivel.style.display == 'none' ){
      segundoNivel.style.display = 'block';
    }else{
      segundoNivel.style.display = 'none';
    }
    const { data } = await apiService.post('/servicos',{Prop:prop});
    dataFilter(prop)
    setclick(prop)
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
        setcontdata(SomenteData)
        setfiles(SomenteData)
      }
    }
    async function loadServicosfoto(ipes,dop) {
      console.log("dop recebido",dop);
      const { data } = await apiService.post('/servicos/fotos',{Mapa:ipes,Foto:dop});
      setpicture(data)
    }

    if(expandimage != 0){ 
      const img = document.getElementById('expanding')    
      const ContenedorExpand = document.getElementById('ContenedorExpand')
      img.style.display = 'block'
      ContenedorExpand.style.display = 'block'
    }

    function Close(){
      const img = document.getElementById('expanding')    
      const ContenedorExpand = document.getElementById('ContenedorExpand')
      img.style.display = 'none'
      ContenedorExpand.style.display = 'none'
      setexpandimage(0)
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
      <ContenedorExpand id='ContenedorExpand' class="material-symbols-outlined" onClick={() => Close()} >
        close
      </ContenedorExpand>
        <Expanding id='expanding' src={expandimage} />
            
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
              <PictureContainer $AtrPicture = {picture.foto} onClick={() => setexpandimage(picture.foto)}>

              </PictureContainer>
            ))}
          </ContainerImages>
          <Button></Button>
          <Button></Button>
          <Button></Button>
        </DynamicWrapper>
        </ContainerSerach>
    </FunkyContainer>  
  )
}

export default App