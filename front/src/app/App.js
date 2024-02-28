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
  Rotation,
  BAckTorow,
  Divloadf,
  FitaBAckScroll,
  AlertBrowse,
  BlockButton,
  FundoLoadImg
} from './style';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';  // npm install dayjs
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { toast } from 'react-toastify';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
//-------------------------------------------
//-------------------------------------------

import { v4 } from 'uuid'; 
import { useEffect, useState } from 'react';
import apiServicen8n from '../services/apin8n8.js';
import apiService from '../services/api.js';

import { useRef } from 'react'; 
import { element } from 'prop-types';
import pix from './pexels-cz-jen-16188539.jpg'
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
  const [digit,sedigit] = useState(false)
  const [pulse,setpulse] = useState(true)
  const [servcesfillter,setservcesfillter] = useState('')

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
        const { data: servicos } = await apiService.post('/servicos', { Prop: service.nome });
        return servicos;
      });

      // Aguardando todas as promises serem resolvidas Assim que terminar o map ele guarda na variavel
      const resultadoPromises = await Promise.all(promises);

      // Atualizando o estado com todos os resultados
      setservicoscanais([...servicoscanais, ...resultadoPromises]);  
      //-----------------------------------------------------------

      const { data } = await apiService.post('/servicos/fotos');
      
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
    console.log('ipes    ',ipes);
    const MainImage = document.getElementById('MainImage');
    const FitaBAckScroll = document.getElementById('FitaBAckScroll');
    MainImage.style.display = 'none';
    FitaBAckScroll.click();
    FitaBAckScroll.style.display = 'none';

    if(ipes.isValid()|| null){      
      const dataInput = ipes.toISOString().split('T')[0] ;  // Convertendo data
      if(dataInput.length > 9) {      
      const DataFilter = contdata && contdata.filter(file => {
        return file.dataConclusao.split('T')[0] == dataInput;
      });
      
      setfiles(DataFilter);
      //-------------------------------------
      
      }
    }
  };

  async function loadServicos(prop,index) {
    let ContainerButton = document.getElementById('ContainerButton')
    let PopCommit = document.getElementById('PopCommit')
    PopCommit.style.display = 'none'
    ContainerButton.style.display = 'none'
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
  const [usd,setusd] = useState([])
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
      console.log('SomenteData  ',SomenteData);

      // const NewSomenteData = SomenteData && SomenteData.forEach( (ser) => {
      //   const valoretorne = fotos.filter(wk => {
      //     return ser.nome == wk.servico_id
      //   })
        
      //  return 
      // });
      console.log("fotos   ",fotos)
      let SomenteData2 = []
      for(let i = 0; i < SomenteData.length;i++){
        console.log('prop ',prop);
        for(let j = 0; j < fotos.length;j++){
          if(fotos[j].servico_id == SomenteData[i].nome){
            SomenteData2.push(SomenteData[i]);
            break
          }
        }
      }  
      console.log("SomenteData2    ",SomenteData2);

      setcontdata(SomenteData2)
      setfiles(SomenteData2)
    }
    if(window.innerWidth < 840){
      const ContainerScroll = document.getElementById('ContainerScroll')
      ContainerScroll.style.display = 'block'
      // Fita.style.animation = `${AniPostitionMoveFita} 2s ease`
    }
  }
  console.log('usd   ',usd);
    async function loadServicosfoto(ipes,dop) {
      let ContainerButton = document.getElementById('ContainerButton')
      let PopCommit = document.getElementById('PopCommit')
      let BoxText = document.getElementById('BoxText')
      const MainImage = document.getElementById('MainImage')
      MainImage.style.display = 'flex'
      
      PopCommit.style.display = 'flex'
      ContainerButton.style.display = 'flex'

      let newarray = pathn8n.splice(2)
      setPathn8n(newarray)
      setPathn8n([...pathn8n,dop])

      const data = fotos.filter((fotos) => fotos.servico_id == dop)
      const filterhttp = data.filter((http) => http.servico_id == dop) 
      setpicture(filterhttp)
      
      const text = pasta.filter((text) => text.nome == dop)
      settextcommit(text[0].commit)
      if(text[0].commit != null){
        BoxText.style.display = 'block'
      }else{ 
        BoxText.style.display = 'none'
      }
      
      setpulse(true)
      if(window.innerWidth < 840){
        const ContainerScroll = document.getElementById('ContainerScroll')
        let FitaBAckScroll = document.getElementById('FitaBAckScroll')
        FitaBAckScroll.style.display = 'flex'
        ContainerScroll.style.display = 'none'
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
      picture && picture.forEach((file,index) => {
        if(indexmore == index){
          setexpandimage(file.foto)  
        }
      });
        setindexpicture(indexmore)
      }
    }

    function KeyBoardPicturedown(moreindex){
      let indexmore = moreindex - 1;
      if (indexmore >= 0) {
      picture && picture.forEach((file,index) => {
        if(indexmore == index){
          setexpandimage(file.foto)  
        }
      });
        setindexpicture(indexmore)
      }
    }

  const keyDownHandler = event => {

    if (event.key === 'Enter') {
      event.preventDefault();

      Buscador()
    }
  };

    function up(event) {
      const bigimg = document.getElementById('expanding')
      if(bigimg.style.display == 'block'){ 

      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        KeyBoardPicturedown(indexpicture)
      }
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        KeyBoardPictureup(indexpicture);
      }
      }
    }
    
    // const swipeDetector = new Hammer(document.getElementById('expanding'));
      keyboard.bind('up', up);
      keyboard.bind('down', up);
      keyboard.bind('left', up);
      keyboard.bind('right', up);
      keyboard.bind('esc', Close);
    
    if (expandimage != 0) {
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
      sedigit(false)
    }
    function OpenCommitfunctin(id,textmenubox){
      if(textmenubox != undefined){ 
        const BoxDiv = document.getElementById(`${id}`)
        const textmenuboxf = document.getElementById(`${textmenubox}`)
        textmenuboxf.style.display = 'flex'
        BoxDiv.style.display = 'flex'
      }else{
        const textmenuboxf = document.getElementById(`${id}`)
        textmenuboxf.style.display = 'flex'
      }
    }
    async function TextBox(childrem){
      let newarray = pathn8n.splice(3)
      setPathn8n(newarray)
      setPathn8n([...pathn8n,childrem])
    }
    async function Updatestatus(){ 
      await apiService.put('/servicos/status',{Data:pathn8n});
    }
    async function UpdatestatusAprovado(){ 
      // await toast.(apiService.put('/servicos/status',{Data:pathn8n,Status:'Aprovado'}),{
      //   pending: "Sending...",
      //   success: "Commit successfully posted",
      //   error: "Failed to send, please try again"
      // })
    }
   if(servicoscanais[0] != null && ablepag != true ){
    setablepag(true)
   }

  function verificarConteudo(value) {
    if(value.target.value.length > 5){ 
      sedigit(true)
    }else{
      sedigit(false)
    }  
  }
  function DisBleLoad(){
    setpulse(false)
  }

  function loadpicture(id,id2){
    const images = document.getElementById(`${id}`);
    const divimg = document.getElementById('Blur')
    images.addEventListener('load',DisBleLoad(id2))
    console.log('id',picture.length);
    console.log('divimg.childElementCount       ',divimg.childElementCount);
    // if( i > picture.length ){   
    //   const t = document.getElementById("t");
    //   t.style.display = 'none'
    // }

  }
  // toast.success('Cadastro criado com sucesso')

  function CloseAndOpen(id) {
    const obj = document.getElementById(`${id}`);
    let FitaBAckScroll = document.getElementById('FitaBAckScroll')
    console.log('obj     ',obj);
    if(obj.style.display == 'block' || obj.style.display == 'flex' ){
      obj.style.display = 'none'
    }else{
      obj.style.display = 'block'
    }    
    FitaBAckScroll.style.display = 'block'
  };

  return(
    <>
    {/* <img src={'https://illuminatenet.com/Form_Brightspeed/fotos_illuminate/Renata/ELTNTNXA-BUTTSPLICE37-0.jpg'} /> */}
    <FunkyContainer>
      <FundoLoad id='FundoLoad' $act={ablepag? 'true' : null}></FundoLoad>
      {/* <BackgroundBigImg id='BackgroundBigImg'  $ActivPicture={expandimage} /> */}
      <BoxLoad id='BoxLoad' sx={{ display: 'flex' }} $act={ablepag? 'true' : null}>
        <LoadCircularProgress />
      </BoxLoad>
        <Expanding id='expanding' $ActivPicture={expandimage} src={expandimage} >

        </Expanding>
        {/* <Icons> */}
        <ContenedorExpand id='ContenedorExpand' className = "material-symbols-outlined" onClick={() => Close()} >
          close
        </ContenedorExpand>
        <Rotation class="material-symbols-outlined">
          screen_rotation
        </Rotation>
        {/* </Icons> */}
            <BoxDiv id='BoxDiv'>
              <div>
                <CloseCommit className = "material-symbols-outlined" onClick={() => CloseCommitfunctin('BoxDiv')} >
                  close
                </CloseCommit>
                <BoxText id='BoxText'>
                  Commit
                </BoxText>
              </div>
              <BoxCaixa minLength={5} id='BoxCaixa' ref={areatextref} onInput={verificarConteudo}>
              </BoxCaixa>
              <Grid>
                <BlockButton $act={digit?'true':''} ></BlockButton>
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
        <InitContainerScroll>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}  >
                <DatePicker label="Data" onChange={dataFilter} />
              </DemoContainer>
            </LocalizationProvider>
            </InitContainerScroll>
            <AlertBrowse id='AlertBrowse'>
              <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="warning">No services found</Alert>
              </Stack>
            </AlertBrowse>
          <ContenedorData id='ContainerScroll'>
            <ContainerScroll>
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
          <FitaBAckScroll id='FitaBAckScroll' onClick={() => CloseAndOpen('ContainerScroll')}>          
            <span id='difrenciado' class="material-symbols-outlined">
              unfold_more_double
            </span>
          </FitaBAckScroll>
          <MainImage id='MainImage'>
            <ContainerImages id='Blur'>
              <FundoLoadImg></FundoLoadImg>
              {  
              picture && picture.map(picture =>{
                const iid = v4() 
                const iid2 = v4() 
                return ( 
                <PictureContainer    onClick={() => FildIndexPicture(picture.foto)}>
                  <Divloadf id={iid2} $act={pulse?'true':'false'} ></Divloadf>
                  <Img id={ iid } key={v4()} onLoad={() => loadpicture(iid,iid2)} src={picture.foto} 
                  loading="lazy"
                  width="500" 
                  height="300" 
                  />
                    
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
              <PopCommit id={'PopCommit'} onClick={() => OpenCommitfunctin('BoxLastCommit')}>REASON OF STATUS</PopCommit>
              <ContainerButton id='ContainerButton'>
                <ButtonGreen  onClick={() => {TextBox("Aprovado"); return UpdatestatusAprovado()}} variant="contained"  disableElevation>
                  Approved
                </ButtonGreen>
              
                <ButtonPendente onClick={() => {TextBox("Pendente"); return OpenCommitfunctin('BoxDiv','BoxText')}} variant="contained" disableElevation>
                  Pending
                </ButtonPendente>
              
                <ButtonRed onClick={() => {TextBox("Reprovado");  return OpenCommitfunctin('BoxDiv','BoxText')}} variant="contained" disableElevation>
                  REJECTED
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