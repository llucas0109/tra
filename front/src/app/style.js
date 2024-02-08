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
  background-color: lightblue;
  min-width: 300px;
  height: 100%;
`;

export const DynamicWrapper = styled.div`
  background-color: #d0d0d0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70%;
  margin: 20px;
  overflow: hidden;
`;

export const QuirkySection = styled.div`
  background-color: #c0c0c0;
  padding: 25px;
  margin: 25px;
`;

export const ColorfulPanel = styled.div`
  background-color: #b0b0b0;
  padding: 30px;
  margin: 30px;
`;
export const Servicos = styled.div`
background-color: gray;
padding:  10px 10px 10px 18px;
margin: 10px;
border-radius: 10px;
`
export const ContainerImages = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  overflow-y: scroll;
`
export const ContainerScroll = styled.div`
  width: 240px;
  height: 100%;
`
export const ItemList = styled.div`
 position: relative;
 flex-direction:column;
 overflow-y: scroll;
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
  background:  ${(props) => props.AtrPicture ? `${props.AtrPicture}` : 'green' };
  margin: 10px;
`

