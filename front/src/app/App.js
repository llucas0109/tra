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
  ContainerButton,
  MainImage,
  ButtonSend,
  Error,
  ButtonContenedor,
  BoxText,
  BoxDiv,
  InitContainerScroll,
  ExpandContainerscrooll,
  ContenedorData,
  ButtonPendente,
  ButtonGreen,
  ButtonRed,
  Fita,
  Box,
  CloseCommit,
  StyledResizableTextarea,
  ButtonS,
  Menu
} from './style';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';  // npm install dayjs
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useEffect, useState } from 'react';
import apiServicen8n from '../services/apin8n8.js';
import apiService from '../services/api.js';

import { useRef } from 'react'; 
const keyboard = require('keyboardjs');


const App = () => {
  const [service,setservice] = useState([])
  const [work,setwork] = useState([])
  const [files,setfiles] = useState([])
  const [picture,setpicture] = useState([])
  const [click,setclick] = useState(0)
  const [expandimage,setexpandimage] = useState(0)
  const [contdata,setcontdata] = useState(0)
  const [indexpicture,setindexpicture] = useState()
  const [pathn8n,setPathn8n] = useState([])
  const [activebotton,setactivebotton] = useState(false)


//----------------- Local onde Sera feito preLoad---------------------
  const [servicoscanais,setservicoscanais] = useState([])
  const [patch,setpatch] = useState([])
//--------------------------------------------------------------------------

  const inputRef = useRef(null);
  const areatextref = useRef(null);
  
 
  useEffect(() => {
    async function loadStartServicos() {
      const { data: canais } = await apiService.get('/servicos');
      setservice(canais); // Atualizando o useState
      
      const promises = canais.map(async (service) => {
        console.log("canais:  ",  service.nome);
        const { data: servicos } = await apiService.post('/servicos', { Prop: service.nome });
        return servicos;
      });

      // Aguardando todas as promises serem resolvidas Assim que terminar o map ele guarda na variavel
      const resultadoPromises = await Promise.all(promises);

      // Atualizando o estado com todos os resultados
      setservicoscanais([...servicoscanais, ...resultadoPromises]);   
    }

    loadStartServicos(); // Chamando a função para que ela possa ser executada
  }, []);

  

  const Buscador = () => {
    const text = inputRef.current.value
    const seach = files.filter(file => file.nome == text)
    setfiles(seach)
  };

  
  async function dataFilter(ipes) {
    if(ipes.isValid() || null){
      console.log("ipes :  ",ipes);
      const dataInput = ipes.toISOString().split('T')[0] ;  // Convertendo data
    
      if(dataInput.length > 9) { 
      console.log("dataInput    ", dataInput, "   file    ",files);
      const DataFilter = contdata && contdata.filter(file => {
        return file.dataConclusao.split('T')[0] == dataInput;
      });

      setfiles(DataFilter)
      //-------------------------------------
      const ErrorFiles = document.getElementById('ErrorFiles');
      //-------------------------------------
      console.log("dataInput.length   ",   dataInput.length);
      if(dataInput.length == 0){
        console.log("Length  muito baixo:   "  );
        ErrorFiles.style.display = 'block'
      }
      }
    }else{
      console.log("invalida Data");
    }
  };
  
  // console.log("servicoscanais:     ", servicoscanais);
  console.log("patch :   ", patch);

  console.log("pathn8n[0]   ",  pathn8n[0]);
  console.log("pathn8n[1]   ",  pathn8n[1]);
  console.log("pathn8n[2]   ",  pathn8n[2]);
  console.log("pathn8n[3]   ",  pathn8n[3]);
  async function loadServicos(prop,index) {
    console.log("Contagem canal :    ", prop);
    console.log("Contagem index :    ", index);
    setPathn8n([prop]);  // slice(1)  Pega todos os intens que vem depoois da posiçao 1.
    if(click != 0 && click != prop){
      const Nivel = document.getElementById(`${click}`)
      Nivel.style.display = 'none'; 
    }
    if(prop != undefined){
      setwork(servicoscanais[index])
      setclick(prop)

      const segundoNivel = document.getElementById(`${prop}`)
      if(segundoNivel.style.display == 'none' ){
        segundoNivel.style.display = 'block';
      }else{
        segundoNivel.style.display = 'none';
      }
    }
  }
  async function loadServicoswk(prop,ipes) {
    let newarray = pathn8n.splice(1)
    setPathn8n(newarray)

    if(ipes != undefined){
      setPathn8n([...pathn8n,ipes]);
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

    if(window.innerWidth < 840){
      const ContainerScroll = document.getElementById('ContainerScroll')
      const VibrantBox = document.getElementById('VibrantBox')
      const Fita = document.getElementById('Fita')
      // Fita.style.animation = `${AniPostitionMoveFita} 2s ease`
      ContainerScroll.style.display = 'block'
      VibrantBox.style.display = 'none'
    }

  }
    async function loadServicosfoto(ipes,dop) {
      let newarray = pathn8n.splice(2)
      setactivebotton(true)
      actbotton()
      setPathn8n(newarray)
      setPathn8n([...pathn8n,dop])
      console.log("dop recebido",dop);
      const { data } = await apiService.post('/servicos/fotos',{Mapa:ipes,Foto:dop});
      setpicture(data)

      console.log("window.screen.width  ",  window.innerWidth)
      if(window.innerWidth < 840){
        const ExpandContainerscrooll = document.getElementById("ExpandContainerscrooll");
        const ContainerScroll = document.getElementById('ContainerScroll')
        ContainerScroll.style.display = 'none'
        ExpandContainerscrooll.style.display = 'block'
      }
    }

    function FildIndexPicture(img){
      setexpandimage(img)
      const index = picture.findIndex(picture => picture.foto === img)
      setindexpicture(index)
    }

    function KeyBoardPictureup(moreindex){
      let indexmore = moreindex + 1;
      if (indexmore < picture.length) {
      console.log("indexmore   ", indexmore);
      picture && picture.forEach((file,index) => {
        if(indexmore == index){
          console.log("Acrecentou um novo valor a expandimage");
          setexpandimage(file.foto)  
        }
      });
        setindexpicture(indexmore)
      }
    }

    function KeyBoardPicturedown(moreindex){
      let indexmore = moreindex - 1;
      if (indexmore >= 0) {
      console.log("indexmore   ", indexmore);
      picture && picture.forEach((file,index) => {
        if(indexmore == index){
          console.log("Acrecentou um novo valor a expandimage");
          setexpandimage(file.foto)  
        }
      });
        setindexpicture(indexmore)
      }
    }

  const keyDownHandler = event => {
    console.log('User pressed: ', event.key);

    if (event.key === 'Enter') {
      event.preventDefault();

      Buscador()
    }
  };
    // console.log("indexpicture    ",indexpicture,"    picture.length      ",picture.length);
    
    function up(event) {
      const bigimg = document.getElementById('expanding')
      if(bigimg.style.display == 'block'){ 

      if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
        console.log("ArrowLeft or ArrowDown");
        KeyBoardPicturedown(indexpicture)
      }
      if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
        console.log("ArrowRight or ArrowUp");
        KeyBoardPictureup(indexpicture);
    
        // Verifique se deve parar de escutar após a execução da lógica
        console.log("indexpicture    ",indexpicture);
        if (indexpicture >= picture.length) {
          console.log("Deve parar de escutar");
        }
      }
      }
    }
    
      keyboard.bind('up', up);
      keyboard.bind('down', up);
      keyboard.bind('left', up);
      keyboard.bind('right', up);
    
    if (expandimage != 0) {
      console.log("Continua entrando ");
      const img = document.getElementById('expanding');
      const ContenedorExpand = document.getElementById('ContenedorExpand');
      img.style.display = 'block';
      ContenedorExpand.style.display = 'block';
    }
    
   
    function Close(){
      const img = document.getElementById('expanding')    
      const ContenedorExpand = document.getElementById('ContenedorExpand')
      img.style.display = 'none'
      ContenedorExpand.style.display = 'none'
      setexpandimage(0)
    }
    function Sharedata(children){
      let newarray = pathn8n.splice(3)
      setPathn8n(newarray)
      setPathn8n([...pathn8n,children])
      Send()
    }

    async function Send(children){

      // await apiServicen8n.post('https://webhook.illuminatenet.com/webhook/af8cd7ff-720e-4327-9f44-62d8d177ae4b',{Data:pathn8n})
    }
    function Scroll(){
      const ExpandContainerscrooll = document.getElementById("ExpandContainerscrooll");
      const ContainerScroll = document.getElementById("ContainerScroll");
      if (ContainerScroll != null) {
        if(ContainerScroll.style.display == "none"){
        ContainerScroll.style.display = "block"
        ExpandContainerscrooll.style.display = "none"
        }else{
          ContainerScroll.style.display = "none"
          ExpandContainerscrooll.style.display = "block"
        }
      }
    }
    async function Send(children){
      apiService.post('/servicos/sql',{Data:pathn8n})
    }
    async function SendCommit(children){
      const text = areatextref.current.value
      console.log("text       ",text);   
      apiService.post('/servicos/commit',{Commit:text})
    }

    function actbotton(){
      const VibrantBox = document.getElementById('VibrantBox')
      const Fita = document.getElementById('Fita')
      if(activebotton == true){
        setactivebotton(false)
      }else{ 
      setactivebotton(true)
      }
    }

    function CloseCommitfunctin(){
      const BoxDiv = document.getElementById('BoxDiv')
      BoxDiv.style.display = 'none'
    }
    function OpenCommitfunctin(){
      const BoxDiv = document.getElementById('BoxDiv')
      BoxDiv.style.display = 'flex'
    }
    function TextBox(childrem){
      
    }

    console.log('activebotton:',activebotton);

  return(
    <>
    <FunkyContainer>
      <ContenedorExpand id='ContenedorExpand' className = "material-symbols-outlined" onClick={() => Close()} >
        close
      </ContenedorExpand>
        <Expanding id='expanding' $ActivPicture={expandimage}>
          
          </Expanding>
            <BoxDiv id='BoxDiv'>
              <div>
                <CloseCommit className = "material-symbols-outlined" onClick={() => CloseCommitfunctin()} >
                  close
                </CloseCommit>
                <BoxText id='BoxText'>
                  Commit
                </BoxText>
              </div>
              <Box ref={areatextref}>
              </Box>
              <ButtonSend onClick={() => SendCommit()}>Send</ButtonSend>
            </BoxDiv>
          <VibrantBox id='VibrantBox' act={activebotton}>
            {service && service.map( (ser,index) => (
            <>
              <Servicos onClick={() =>loadServicos(ser.nome,index)}>
                {ser.nome}
              </Servicos>
              <QuirkySection id={ser.nome} style={{display: 'none'}}>
                {work && work.map(wk => (
                <>
                <ColorfulPanel onClick={() => loadServicoswk(ser.nome,wk.nome)}>
                  {wk.nome}
                </ColorfulPanel>
                {/* ---------------------------------------------- */}
                </>
                ))}
              </QuirkySection>
            </>
                  ))} 
          </VibrantBox>
          <Fita id='Fita' onClick={() => actbotton()} act={activebotton}></Fita>
      <ContainerSerach>
        <Container>
          <Serch>
            <InputSerach placeholder='Digite algo para pequisar' ref={inputRef} onKeyDown={keyDownHandler}></InputSerach>
            <BottonSerch onClick={Buscador}><span className="material-symbols-outlined" >search</span></BottonSerch>
          </Serch>
        </Container>
        <DynamicWrapper>
          <ContenedorData>
            <InitContainerScroll>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}  >
                <DatePicker label="Data" onChange={dataFilter} />
              </DemoContainer>
            </LocalizationProvider>
            </InitContainerScroll>
            <ExpandContainerscrooll id='ExpandContainerscrooll' onClick={() => Scroll()}></ExpandContainerscrooll>
            <ContainerScroll id='ContainerScroll'>
              {work && work.map(wk => (
              <ItemList id={wk.nome} style={{display: 'none'}}>
                <Error id='ErrorFiles' > Nenhum valor encontrado relacionado a pesquisa </Error>
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
          </ContenedorData>
          <MainImage>
            <ContainerImages>
              {picture && picture.map(picture => ( 
                <PictureContainer $AtrPicture = {picture.foto} onClick={() => FildIndexPicture(picture.foto)}>
                </PictureContainer>
              ))}
            </ContainerImages>
            <ContainerButton>
              <ButtonGreen variant="contained"  disableElevation>
                Approved
              </ButtonGreen>
            
              <ButtonPendente onClick={() => OpenCommitfunctin()} variant="contained" disableElevation>
                Pending
              </ButtonPendente>
            
              <ButtonRed onClick={() => OpenCommitfunctin()} variant="contained" disableElevation>
                Disapproved
              </ButtonRed>
            
              {/* <ButtonGreen onClick={() => Sharedata("Aprovado")}>Approved</ButtonGreen>
              <Button onClick={() => Sharedata("Pendente")}>Pending</Button>
              <ButtonRed onClick={() => Sharedata("Reprovado")}>Disapproved</ButtonRed> */}
            </ContainerButton>
          </MainImage> 
        </DynamicWrapper>
        </ContainerSerach>
    </FunkyContainer> 
    
    </> 
  )
}

export default App