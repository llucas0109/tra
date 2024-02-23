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
  LastCommit,
  ButtonContenedor,
  BoxText,
  BoxDiv,
  InitContainerScroll,
  ExpandContainerscrooll,
  ContenedorData,
  PopCommit,
  ButtonPendente,
  ButtonGreen,
  ButtonRed,
  Fita,
  BottonCommit,
  CloseCommit,
  StyledResizableTextarea,
  BoxCaixa,
  Img,
  LoadCircularProgress,
  BoxLoad,
  ButtonS,
  FundoLoad,
  Menu,
  Grid,
  BackgroundBigImg,
  BoxTextLast,
  BlockButton,
  FundoLoadImg
} from './style';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';  // npm install dayjs
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { v4 } from 'uuid'; 

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
  const [activebotton,setactivebotton] = useState(true)
  const [pasta,setpasta] = useState([])
  const [textcommit,settextcommit] = useState('')
  const [ablepag,setablepag] = useState(false)

//----------------- Local onde Sera feito preLoad---------------------
  const [servicoscanais,setservicoscanais] = useState([])
  const [patch,setpatch] = useState([])
  const [fotos,setfotos] = useState([])
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
      //-----------------------------------------------------------

      const { data } = await apiService.post('/servicos/fotos');
      console.log("all fotoss             ",data);
      setfotos(data)
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
    let ContainerButton = document.getElementById('ContainerButton')
    let PopCommit = document.getElementById('PopCommit')
    PopCommit.style.display = 'none'
    ContainerButton.style.display = 'none'
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
    let ContainerButton = document.getElementById('ContainerButton')
    let PopCommit = document.getElementById('PopCommit')
    PopCommit.style.display = 'none'
    ContainerButton.style.display = 'none'
    let newarray = pathn8n.splice(1)
    setPathn8n(newarray)
    actbotton()
    if(ipes != undefined){
      setPathn8n([...pathn8n,ipes]);
      const segundoNivel = document.getElementById(`${ipes}`)
      if(segundoNivel.style.display == 'none' ){
        segundoNivel.style.display = 'block';
      }else{
        segundoNivel.style.display = '';
      }
      const { data } = await apiService.post('/servicos',{Prop:prop,Ipes:ipes});
      setpasta(data)
      const SomenteData = data.filter(data => data.dataConclusao != null)
      console.log("filtrar onde nao tem data de conclusao",SomenteData);
      setcontdata(SomenteData)
      setfiles(SomenteData)
      
    }

    if(window.innerWidth < 840){
      const ContainerScroll = document.getElementById('ContainerScroll')
      ContainerScroll.style.display = 'block'
      // Fita.style.animation = `${AniPostitionMoveFita} 2s ease`
    }

  }
  console.log("pasta dados que preciso.       ",pasta);
    async function loadServicosfoto(ipes,dop) {
      let ContainerButton = document.getElementById('ContainerButton')
      let PopCommit = document.getElementById('PopCommit')
      let BoxText = document.getElementById('BoxText')
      PopCommit.style.display = 'flex'
      ContainerButton.style.display = 'flex'

      let newarray = pathn8n.splice(2)
      setPathn8n(newarray)
      setPathn8n([...pathn8n,dop])

      const data = fotos.filter((fotos) => fotos.servico_id == dop)
      const filterhttp = data.filter((http) => http.servico_id == dop) 
      console.log("Dados recebidos de imagem direto funcao       ",filterhttp);
      setpicture(filterhttp)
      
      const text = pasta.filter((text) => text.nome == dop)
      settextcommit(text[0].commit)
      if(text[0].commit != null){
        BoxText.style.display = 'block'
      }else{ 
        BoxText.style.display = 'none'
      }

      if(window.innerWidth < 840){
        const ContainerScroll = document.getElementById('ContainerScroll')
        ContainerScroll.style.display = 'none'
      }
    }
    console.log('textcommit         ',textcommit);
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

      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        console.log("ArrowLeft or ArrowDown");
        KeyBoardPicturedown(indexpicture)
      }
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
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
      keyboard.bind('esc', Close);
    
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
    function Sharedata(){
      Send()
      SendCommit()
      const BoxDiv = document.getElementById('BoxDiv')
      BoxDiv.style.display = 'none'
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
    async function Send(){
      apiService.post('/servicos/sql',{Data:pathn8n})
    }
    async function SendCommit(){
      const text = areatextref.current.value
      console.log("text   ",text); 
      console.log("pathn8n   " ,pathn8n);
      await apiService.put('/servicos/commit',{Conect: pathn8n , Commit:text})
    }

    function actbotton(){
      if(activebotton == true){
        setactivebotton(false)
      }else{ 
      setactivebotton(true)
      }
    }

    function CloseCommitfunctin(id){
      const BoxDiv = document.getElementById(`${id}`)
      BoxDiv.style.display = 'none'
    }
    function OpenCommitfunctin(id,textmenubox){
      if(textmenubox != undefined){ 
        const BoxDiv = document.getElementById(`${id}`)
        const textmenuboxf = document.getElementById(`${textmenubox}`)
        textmenuboxf.style.display = 'block'
        BoxDiv.style.display = 'flex'
      }else{
        const textmenuboxf = document.getElementById(`${id}`)
        textmenuboxf.style.display = 'block'
      }
    }
    async function TextBox(childrem){
      console.log("TextBox     ", childrem);
      let newarray = pathn8n.splice(3)
      setPathn8n(newarray)
      setPathn8n([...pathn8n,childrem])
    }
    async function Updatestatus(){ 
      await apiService.put('/servicos/status',{Data:pathn8n});
    }
    async function UpdatestatusAprovado(){ 
      await apiService.put('/servicos/status',{Data:pathn8n,Status:'Aprovado'});
    }
    // console.log('textcommit.nome:      ',textcommit[0].commit);
    
   if(servicoscanais[0] != null && ablepag != true ){
    setablepag(true)
   }

  return(
    <>
    {/* <img src={'https://illuminatenet.com/Form_Brightspeed/fotos_illuminate/Renata/ELTNTNXA-BUTTSPLICE37-0.jpg'} /> */}
    <FunkyContainer>
      <FundoLoad id='FundoLoad' $act={ablepag? 'true' : null}></FundoLoad>
      <BoxLoad id='BoxLoad' sx={{ display: 'flex' }} $act={ablepag? 'true' : null}>
        <LoadCircularProgress />
      </BoxLoad>
        <BackgroundBigImg />
        <Expanding id='expanding' $ActivPicture={expandimage}>
          <ContenedorExpand id='ContenedorExpand' className = "material-symbols-outlined" onClick={() => Close()} >
          close
          </ContenedorExpand>
        </Expanding>
            <BoxDiv id='BoxDiv'>
              <div>
                <CloseCommit className = "material-symbols-outlined" onClick={() => CloseCommitfunctin('BoxDiv')} >
                  close
                </CloseCommit>
                <BoxText id='BoxText'>
                  Commit
                </BoxText>
              </div>
              <BoxCaixa ref={areatextref}>
              </BoxCaixa>
              <Grid>
              <BlockButton $act ={ inputRef?'yes':"no" }></BlockButton>
              <ButtonSend  id={v4()} onClick={() => {Sharedata('Send'); return Updatestatus()}}>Send</ButtonSend>
              </Grid>
            </BoxDiv>
          <VibrantBox id='VibrantBox' act={activebotton? 'Possui dados': null}>
            {service && service.map( (ser,index) => (
            <>
              <Servicos  id={v4()} onClick={() =>loadServicos(ser.nome,index)}>
                {ser.nome}
              </Servicos>
              <QuirkySection id={ser.nome} style={{display: 'none'}}>
                {work && work.map(wk => (
                <>
                <ColorfulPanel id={v4()} onClick={() => loadServicoswk(ser.nome,wk.nome)}>
                  {wk.nome}
                </ColorfulPanel>
                {/* ---------------------------------------------- */}
                </>
                ))}
              </QuirkySection>
            </>
                  ))} 
          </VibrantBox>
          <Fita id='Fita' onClick={() => actbotton()} act={activebotton? 'Possui dados': null}></Fita>
      <ContainerSerach>
        <Container>
          <Serch>
            <InputSerach placeholder='Search' ref={inputRef} onKeyDown={keyDownHandler}></InputSerach>
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
            <ContainerScroll id='ContainerScroll'>
              {work && work.map(wk => (
              <ItemList id={wk.nome} style={{display: 'none'}}>
                <Error id='ErrorFiles' > Nenhum valor encontrado relacionado a pesquisa </Error>
                  {files && files.map(file => (
                    <>
                    <ListContainer id={v4()} onClick={() => loadServicosfoto(wk.nome,file.nome)}
                    $bordercolor={file.status}
                    >
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
              <FundoLoadImg></FundoLoadImg>
              {  
              picture && picture.map(picture =>{ 
                console.log('picture.foto    ',picture.foto);
                return ( 
                <PictureContainer onClick={() => FildIndexPicture(picture.foto)}>
                  <Img id={v4()} src={picture.foto} />
                </PictureContainer>
              )})}
            </ContainerImages>
            <BoxDiv id='BoxLastCommit'>
              <div>
                <CloseCommit className = "material-symbols-outlined" onClick={() => CloseCommitfunctin('BoxLastCommit')} >
                  close
                </CloseCommit>
                <BoxTextLast id='BoxTextLast'>
                  Last Commit
                </BoxTextLast>
              </div>
              <LastCommit>
                {textcommit}
              </LastCommit>
            </BoxDiv>
            <BottonCommit>
              <PopCommit id={'PopCommit'} onClick={() => OpenCommitfunctin('BoxLastCommit')}>Last Commit</PopCommit>
              <ContainerButton id='ContainerButton'>
                <ButtonGreen  onClick={() => {TextBox("Aprovado"); return UpdatestatusAprovado()}} variant="contained"  disableElevation>
                  Approved
                </ButtonGreen>
              
                <ButtonPendente onClick={() => {TextBox("Pendente"); return OpenCommitfunctin('BoxDiv','BoxText')}} variant="contained" disableElevation>
                  Pending
                </ButtonPendente>
              
                <ButtonRed onClick={() => {TextBox("Reprovado");  return OpenCommitfunctin('BoxDiv','BoxText')}} variant="contained" disableElevation>
                  Disapproved
                </ButtonRed>
              </ContainerButton>
            </BottonCommit>
          </MainImage> 
        </DynamicWrapper>
        </ContainerSerach>
    </FunkyContainer> 
    
    </> 
  )
}

export default App