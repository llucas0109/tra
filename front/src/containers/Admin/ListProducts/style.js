import styled from "styled-components";
import EditIcon from '@mui/icons-material/Edit';

export const Container = styled.div`
  
`
export const Img = styled.img `
  width: 60px;
  height: 60px;
`

export const PageLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.$isActive ? '#975BA6':'#555555'};  // 
  font-size: 16px;
  line-height: 19px;
  font-weight: ${props => props.$isActive ? 'bold':'normal'};
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const ContainerText = styled.div`

  p{
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;

    color: #555555;
    }
`
export const Line = styled.div`
  height: 40px;
  border: 0.5px solid #bababa;
`
export const PageLinkExit = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #9758a6;
`
export const IconEdit = styled(EditIcon)`
  cursor: pointer;
  color: #323D5D;
`