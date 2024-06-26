import styled, { keyframes } from 'styled-components';
import { Keymenu } from './styledkey';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { ToastContainer } from "react-toastify";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';  // npm install dayjs
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const DemoContainer1 = styled(DemoContainer)`
  
`
export const AdapterDayjs1 = styled(AdapterDayjs)`

`
export const LocalizationProvider1 = styled(LocalizationProvider)`

`
export const DatePicker1 = styled(DatePicker)`

`

export const StyledContainer = styled(ToastContainer)`
  // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
  &&&.Toastify__toast-container {
    z-index: 10;
  }
  .Toastify__toast {
    z-index: 10;
  }
  .Toastify__toast-body {
    z-index: 10;
  }
  .Toastify__progress-bar {
    z-index: 10;
  }
`;

export const pulse = keyframes` 
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.7;
  }
`
export const Divloadf = styled.div`
  width: 150px;
  height: 150px; 
  grid-row: 1/2;
  grid-column: 1/2; 
  display: block;
  display: ${(prop) => prop.$act == 'true'? 'block': 'none'};
  margin: 30px;
  background-color: #ccc;
  z-index: 1;
  animation: ${pulse} 1.5s infinite;

  @media screen and (max-width: 466px){
    width: 43%;
    height: 29%;
    margin: 1vw;
  }
`
export const BoxLoad = styled(Box)`
  &&{
    display: ${prop => prop.$act? 'none' : 'block' };
    position: absolute;
    z-index: 7;
  }
`
export const FundoLoad = styled.div`
  display: ${prop => prop.$act? 'none' : 'block' };
  width: 100vw;
  height: 100vh;
  background-color: #ffffff75;
  position: absolute;
  z-index: 5;
`
export const FundoLoadImg = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff73;
  z-index: 1;
  position: absolute;
  z-index: 3;
  display: none;

`
export const FundoExpanding = styled.div`
  position: absolute;
  display: none;
  width: 100vw;
  height: 100vh;
  background-color: #0000004a;
  z-index: 5;
`
export const BoxLoadImg = styled(Box)`
  &&{
    /* display: ${prop => prop.$act? 'none' : 'block' }; */
    position: absolute;
    display: none;
    z-index: 4;
  }
`
export const LoadCircularProgress = styled(CircularProgress)`

`
export const ButtonGreen = styled(Button)`
  && { // temos colocar && para alterar cor e outras coidsa do styled components
    background-color: #16cf16;
    height: 61px;   
    width: 110px ;

    @media screen and (max-width: 350px) {
     font-size: 10px;
    }
  }
  
  &&:hover{  // temos colocar && para alterar cor e outras coidsa do styled components
    background-color: green;
  }
`
export const ButtonRed = styled(Button)`
  && { // temos colocar && para alterar cor e outras coidsa do styled components
    background-color: red; 
    height: 61px;
    width: 110px;
    @media screen and (max-width: 350px) {
     font-size: 10px;
    }
  }
  &&:hover{
    background-color: #d10000;
  }
`

export const ButtonPendente = styled(Button)`
  && { // temos colocar && para alterar cor e outras coidsa do styled components
    background-color: #cfcf04;
    height: 61px; 
    width: 110px;
    @media screen and (max-width: 350px) {
     font-size: 10px;
    }
  }
  &&:hover{
    background-color: #abab05;
  }
`
export const FunkyContainer = styled.div`
  background-color: red;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 840px) {
    flex-direction: column;
  } 
`;

export const DynamicWrapper = styled.div`
  background-color: #d0d0d0;
  background-color: #323639;
  display: flex;
  width: 95%;
  height: 100%;
  overflow: hidden;

  @media screen and (max-width: 840px){
    flex-direction: column;
  }
`;

export const QuirkySection = styled.div`
  background-color: #394142;
  border-radius: 10px 10px 10px 10px;
  padding: 9px;
  margin: 0px 25px 16px 25px;
`;

export const ColorfulPanel = styled.div`
  background-color: #454A4E;
  padding: 11px 11px 11px 11px;
  border-radius: 10px 10px 10px 10px;
  margin: 7px;
  cursor: pointer;
`;
export const Servicos = styled.div`
background-color: gray;
padding:  10px 10px 10px 18px;
margin: 10px;
border-radius: 10px;
cursor: pointer;
`
export const DivMainImg = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;

`
export const MainImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #323639;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 840px) {
    width: 100%;
    justify-content: start;
  }
`
export const ContainerImages = styled.div`
  display: flex;
  justify-content: flex-start; /* Alinha os itens à esquerda */
  flex-wrap: wrap;
  overflow-y: scroll;
  align-items: center;
  background-color: #454A4E;
  width: 100%;
  height: 61%;
  
  &::-webkit-scrollbar{ // Aditar scrollbar
    
  }
  .DivFloat{
    display: ${(prop) => prop.$act == 'true'?'block':'none'};
  }
`
export const ContainerScroll = styled.div`
  
  /* width: 240px;
  height: 100%;
  @media screen and (max-width: 840px) {
    height: 92%;
    width: 100%;
  }  */
`
export const AlertBrowse = styled.div`
  display: none;
  width: 95%;
  height: 100px;
  margin: 10px;
`

export const ItemList = styled.div`
  
`
export const ListContainer = styled.div`
  background-color: gray;
  width: 200px;
  padding:  10px 10px 10px 18px;
  margin: 10px;
  cursor: pointer;
  border: 3px solid ${ (prop) => prop.$bordercolor == 'Aprovado'? '#16CF16' :
   prop.$bordercolor == 'Reprovado'? '#D10000'  :
   prop.$bordercolor == 'Pendente'? '#ABAB05' : '#808080' };
   border-radius: 10px;
`
export const PictureContainer = styled.div`
  width: 200px;
  height: 150px;
  box-shadow: 5px 5px 13px -1px #0000006b;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  /* background: url(${props => props.$AtrPicture ? props.$AtrPicture : ''}) no-repeat center center; */
  background-size: cover;
  margin: 10px;
  cursor: pointer;

  @media screen and (max-width: 466px){
    width: 43%;
    height: 29%;
    margin: 1vw;
  }

  @media screen and (min-width: 1350px){
    width: 31%;
    height: 47%;
    margin: 1vw;
    margin: 7px;
  }
  /* @media screen and (max-width: 1250px) and (){
    width: 31%;
    height: 30%;
    margin: 1vw;
    margin: 7px;
  } */
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  grid-row: 1/2;
  grid-column: 1/2;
  z-index: 2;
`
export const ContainerSerach = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #252525;

@media screen and (max-width: 840px){
  height: 100vh;

} 
`
export const Container = styled.div`
 display: flex;
 justify-content: end;
 align-items: center;
 height: 100px;
 border-radius: 10px 10px 0px 0px;
 width: 95%;
 margin: 40px 40px 0 40px;
 background-color: #5b5b5b;

 @media screen and (max-width: 840px){
  margin: 7px 0px 0 0px;
 }
`
export const InputData = styled.input`
  width: 100px;
  height: 48%;
  margin: 0px;
  padding: 0px;
  outline: none;
  border: none;
  background-color: none;
  margin: 3px;
  border-radius: 4px;
  cursor: pointer;
`
export const Serch = styled.div` 
 display: flex;
 align-items: center;
 justify-content: center;
 height: 40px;
 margin-right: 10px;
`
export const InputSerach = styled.input`
  width: 200px;
  height: 100%;
  margin: 10px 0 10px 10px;
  border: none;
  padding-left: 3px;
  border-radius: 5px 0 0 5px;
  outline: none;
`
export const BottonSerch = styled.a`
  padding: 6px;
  background-color: #fff;
  color: #07406B;
  border-left: 1px solid #dbdbdb;
  border-radius: 0 5px 5px 0;
  cursor: pointer;

`
export const CotainerMain = styled.div`
  overscroll-behavior: auto;


  /* Estilo para a barra de rolagem */
::-webkit-scrollbar {
  width: 1em;
}

/* Estilo para a área de fundo da barra de rolagem */
::-webkit-scrollbar-track {
  background: #D9DEE0;
  border-radius: 100vw;
  margin-block: 10px;
}

/* Estilo para o polegar (thumb) da barra de rolagem */
::-webkit-scrollbar-thumb {
  background: #454A4E;
  border-radius: 100vw;
  border: 2px solid #D9DEE0;
}

`
export const Expanding = styled.img`
  display: none;
  position: absolute;
  width: 97%;
  z-index: 6;
  overflow-y: auto;
  /* transform: rotate(90deg); */
  padding: -70px -70px;
  background-image: url(${props => props.$ActivPicture ? props.$ActivPicture : 'green'});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid black;
  margin: 10px;

  @media screen and (min-width: 1020px) {
    height: 80%;
    width: 80%;
  }

`
export const Rotation = styled.span`
display: none;
  position: absolute;
  font-size: 57px;
  background-color: #00000096;
  z-index: 7;
  top: 2%;
  left: 50%;
  cursor: pointer;
  border-radius: 10px;
  color: #ffffff82;
  cursor: pointer;
  &:hover{
    opacity: 0.8;
  }
`

export const ContenedorExpand = styled.span`
  position: absolute;
  display: none;
  font-size: 57px;
  background-color: #00000096;
  z-index: 7;
  top: 2%;
  left: 75%;
  cursor: pointer;
  border-radius: 10px;
  color: #ffffff82;
  cursor: pointer;
  &:hover{
    opacity: 0.8;
  }
`
export const ContainerButton =  styled.div`
  display: none;
  position: absolute;
  justify-content: center;
  gap: 1vw;
  width: 100%;
  justify-content: center;
  align-items: center;
  justify-content: center;
  top: 100%;

  @media screen and (max-width: 840px) { 
    margin: 7px 0;
    width: 90%;
  }

  
`
export const ButtonContenedor =  styled.div`
  width: 111px;
  height: 50px;
  
`
export const ButtonSend =  styled.button`
  width: 100%;
  border-radius: 10px 10px 10px 10px;
  top: 81%;
  height: 70px;
  border: none;
  z-index: 4;
  grid-row: 1/2;
  grid-column: 1/2;
  &::selection{
    background-color: black;
  }
  &:hover{
    background-color: #00000054;
  }
  &:active{
    opacity: 0.6;
  }
`

export const Error =  styled.p`
  display: none;
  color: red;
  font-size: 13px;
  
`
export const AlertServicos = styled.div`
  margin: 10px;
  display: ${(prop) => prop.$Act == 0 ? 'block' : 'none'};
`

export const BAckTorow = styled.div`

`
export const ContenedorData = styled.div`
  overflow-y: scroll;
  @media screen and (max-width: 840px) {
    height: 31%;
  }
  @media screen and (min-width: 840px) {
    height: 90%;
  }
`
export const InitContainerScroll = styled.div`
  height: 70px;
  margin: 5px;
  
`
export const ExpandContainerscrooll = styled.div`
 display: flex;
 flex-direction: column;


  
`
export const FitaBAckScroll = styled.span`
  display: none;
  @media screen and (max-width: 840px) {
    width: 53px;
    height: 50px;
    border-radius: 5px;
    display: none;
    align-items: center;
    justify-content: center;
    margin-left: 7px;
    border: 2px solid #9d9c9cc7;
    color: #292929;
    cursor: pointer;

  &:hover{
    background-color: #9d9c9cc7;
  }
  &:active{
    opacity: 0.6;
  } 
}

`
//------------Animacoes-------------------------------
 export const AnimationMenudown = keyframes` 
  1%{left: 2%} 
  100%{left: -61%}
 `
 export const AnimationMenuup = keyframes` 
  1%{left: -61%} 
  99%{left: 2%}
  100%{display: block}
`
 export const AniPostitionMoveFitadown = keyframes` 
    0%{left: 61%} 
    100%{left: -2.5%}
`
export const AniPostitionMoveFitaup = keyframes` 
    0%{left: -3%} 
    100%{left: 61%}
`  
//-------------------------------------------
export const Fita = styled.span`
  display: none;
  z-index: 2;
  @media screen and (max-width: 840px) { 
    display: block;
    width: 50px;
    height: 50px;
    background-color: #D0D0D0;
    border-left: 1px solid black;
    position: absolute;
    border-radius: 0 10px 10px 0;
    padding-left: 3px;    
    top: 53px;
    left: 61%;
    animation: ${(p) => (p.act ? AniPostitionMoveFitaup : AniPostitionMoveFitadown )} forwards 0.5s;  // forwards mantem as configuracoes do ultimo frame
  }  
`

export const VibrantBox = styled.div`  
  background-color: #323639;
  min-width: 300px;
  height: 100%;
  display: block;
  z-index: 4;
  overflow-y: auto;

  

  @media screen and (max-width: 840px){
    display: block;
    position: absolute;
    width: 59%;
    top: 10px;
    border-radius: 10px 10px 0px 0px;
    left: 2%; 
    animation: ${(p) => (p.act ? AnimationMenuup : AnimationMenudown )} forwards 0.5s; // forwards mantem as configuracoes do ultimo frame
  }
  @media screen and (max-width: 550px){
    min-width: 59%;
  }
`;

export const Menu = styled.div` 
  @media screen and (max-width: 840px){
    /* background-color: #D0D0D0; */
    display: flex;
    flex-direction: row;
    justify-content: end;
    width: 250px;
    position: absolute;
    height: 100%;
    top: 0px;
    left: 0px;
    
  }
`
export const BoxDiv = styled.div`
  display: none;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  border: 1px solid #1565C0;
  z-index: 4;
  height: 42%;
  width: 300px;
  border-radius: 10px 10px 10PX 10PX;
`
export const BoxText = styled.div`
  width: 100%;
  font-size: 19px;
  font-weight: 700;
  padding-bottom: 5px;
  border-radius: 10px 10px 0px 0px;
  text-align: center;
`
export const BoxTextLast = styled.div`
  width: 100%;
  font-size: 19px;
  font-weight: 700;
  padding-bottom: 5px;
  border-radius: 10px 10px 0px 0px;
  text-align: center;
`
export const BoxCaixa = styled.textarea` //uma caixa de texto
  outline: none;
  height: 100%;
  width: 100%;
  resize: none; /* Impede a redimensionamento manual do textarea */
  overflow-y: hidden; /* Impede a exibição de barras de rolagem */
  box-sizing: border-box; 
  font-size: 30px;
  padding: 7px 0px  0px 7px;
  &:active{
    border: 1px solid #1567b1;
  }
`
export const CloseCommit = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0%;
  left: 0%;
`
export const LastCommit = styled.div` 
  height: 330px;
  width: 90%;
  border: 1px solid black;
` 
export const PopCommit = styled(Button)`
  &&{display: none;
  background-color: #fff;
  cursor: pointer;
  width: 200px;
  height: 31px;
  border-radius: 15px 15px 15px 15px;
  align-self: flex-end;
  font-size: 15px;
  text-align: center;
  padding: 6px;
  margin-bottom: 3px;
  border: 1px solid #284c57;
  box-shadow: 1px 1px 1px #00000094;
  }
  &&:hover{
    opacity: 0.8;
  }
  &&:active{
    opacity: 0.5;
  }
`
export const BottonCommit = styled.div`
  position: absolute;
  justify-content: center;
  gap: 1vw;
  width: 38%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 81%;
  z-index: 3;


  @media screen and (max-width: 840px) { 
    margin: 7px 0;
    width: 90%;
    font-size: 10px;
  }
`
export const BackgroundBigImg = styled.div`
  position: absolute;
  background: #000000a8;
  display: ${props => props.$ActivPicture ? 'block' : 'none'};
  width: 100vw;
  height: 100vh;
  z-index: 5;
`
export const BlockButton = styled.div`
  background-color: #ffffff96;
  display: ${(prop) => prop.$act == "true" ?"none":"block"};
  width: 100%;
  height: 100%;
  z-index: 5;
  grid-row: 1/2;
  grid-column: 1/2;
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 91%;
  border-radius: 10px 10px 10px 10px;
  top: 81%;
  height: 70px;
  border: none;
  margin: 5px 0px 5px 0px;

`
