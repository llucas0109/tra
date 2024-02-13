import styled from 'styled-components';

export const FunkyContainer = styled.div`
  background-color: red;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VibrantBox = styled.div`
  background-color: #D0D0D0;
  min-width: 300px;
  height: 100%;
`;

export const DynamicWrapper = styled.div`
  background-color: #d0d0d0;
  display: flex;
  width: 95%;
  height: 100%;
  overflow: hidden;
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
`;
export const Servicos = styled.div`
background-color: gray;
padding:  10px 10px 10px 18px;
margin: 10px;
border-radius: 10px;
`
export const ContainerImages = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    height: 241px;
    background-color: #e5e5e5;
`
export const ContainerScroll = styled.div`
  width: 240px;
  height: 100%;
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
`
export const PictureContainer = styled.div`
  width: 100px;
  height: 100px;
  background: url(${props => props.$AtrPicture ? props.$AtrPicture : 'green'});
  background-size: cover;
  margin: 10px;
`
export const ContainerSerach = styled.div`
width: 95%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #252525;
`
export const Container = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 height: 100px;
 width: 95%;
 margin: 40px 40px 0 40px;
 background-color: #5b5b5b;
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
`
export const Expanding = styled.img`
  display: none;
  position: absolute;
  z-index: 1;
  width: 90%;
  height: 90%;
  margin: 10px;
  box-shadow: 0px 0px 0 100px #000000a8;
`
export const ContenedorExpand = styled.span`
  position: absolute;
  display: none;
  width: 100px;
  height: 100px;
  background-color: #00000078;
  z-index: 2;
  top: 5%;
  left: 5%;
`
export const Button =  styled.button`

`