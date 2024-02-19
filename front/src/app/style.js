import styled, { keyframes } from 'styled-components';
import { Keymenu } from './styledkey';

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
  display: flex;
  width: 95%;
  height: 100%;
  overflow: hidden;

  @media screen and (max-width: 840px){
    flex-direction: column;
  }
`;

export const QuirkySection = styled.div`
  background-color: #c0c0c0;
  padding: 9px;
  margin: 0px 25px 16px 25px;
`;

export const ColorfulPanel = styled.div`
  background-color: #b0b0b0;
  padding: 11px 11px 11px 11px;
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
export const MainImage = styled.div`
  width: 70%;
  height: 100%;
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
    flex-wrap: wrap;
    overflow-y: scroll;
    width: 100%;
    height: 241px;
    background-color: #e5e5e5;
`
export const ContainerScroll = styled.div`
  width: 240px;
  height: 100%;
  @media screen and (max-width: 840px) {
    height: 35%;
    width: 100%;
  } 
`
export const ItemList = styled.div`
 position: relative;
 flex-direction:column;
 overflow-y: scroll;
 height: 100%;
`
export const ListContainer = styled.div`
  background-color: gray;
  width: 200px;
  padding:  10px 10px 10px 18px;
  margin: 10px;
  cursor: pointer;
`
export const PictureContainer = styled.div`
  width: 100px;
  height: 100px;
  background: url(${props => props.$AtrPicture ? props.$AtrPicture : 'green'});
  background-size: cover;
  margin: 10px;
  cursor: pointer;
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
  border-left: 1px solid #dbdbdb;
  border-radius: 0 5px 5px 0;
  cursor: pointer;

`
export const Expanding = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  background: url(${props => props.$ActivPicture ? props.$ActivPicture : 'green'});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 90%;
  height: 90%;
  margin: 10px;
  box-shadow: 0px 0px 0 100px #000000a8;

  &::after{
    content: '';
    display: block;
    background-color: black;
  }
`
export const ContenedorExpand = styled.span`
  position: absolute;
  display: none;
  font-size: 70px;
  background-color: #00000078;
  z-index: 2;
  top: 5%;
  left: 5%;
  cursor: pointer;

  &:hover{
    
  }
`
export const ContainerButton =  styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 840px) { 
    margin: 7px 0;
  }
`
export const Button =  styled.button`
  width: 30%;
  height: 60px;
  background-color: aliceblue;
  outline: none;
  margin: 1%;

  border: 2px solid black;
  
`
export const ButtonSend =  styled(Button)`
  width: 90%;
  height: 50px;
`
export const ButtonGreen =  styled(Button)`
  background-color: green;
`
export const ButtonRed =  styled(Button)`
  background-color: red;
`
export const Error =  styled.p`
  display: none;
  color: red;
  font-size: 13px;
  
`
export const InitContainerScroll = styled.div`
  height: 117px;
  margin: 5px;
`
export const ExpandContainerscrooll = styled.div`
 
 @media screen and (max-width: 840px) {
  width: 60px;
  height: 70px;
  background-color: black;
 }
  
`
//------------Animacoes-------------------------------
 export const AnimationMenudown = keyframes` 
  1%{left: 4%} 
  99%{left: -62%}
  100%{display: none}
 `
 export const AnimationMenuup = keyframes` 
  1%{left: -62%} 
  99%{left: 4%}
  100%{display: block}
`
 export const AniPostitionMoveFitadown = keyframes` 
    0%{left: 60%} 
    100%{left: -3%}
`
export const AniPostitionMoveFitaup = keyframes` 
    0%{left: -4%} 
    100%{left: 61%}
`  
//-------------------------------------------
export const Fita = styled.span`
  width: 50px;
  height: 50px;
  background-color: #D0D0D0;
  border-left: 1px solid black;
  position: absolute;
  border-radius: 0 10px 10px 0;
  top: 53px;
  left: 61%;
  animation: ${(p) => (p.act ? AniPostitionMoveFitadown: AniPostitionMoveFitaup)} forwards 1s;  // forwards mantem as configuracoes do ultimo frame
`

export const VibrantBox = styled.div`  
  background-color: #D0D0D0;
  width: 300px;
  height: 100%;

  @media screen and (max-width: 840px){
    display: block;
    position: absolute;
    width: 59%;
    top: 10px;
    border-radius: 10px 10px 0px 0px;
    left: 2%; 
    animation: ${(p) => (p.act ? AnimationMenudown: AnimationMenuup)} forwards 1s; // forwards mantem as configuracoes do ultimo frame
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
