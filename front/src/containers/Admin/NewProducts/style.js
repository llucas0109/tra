import styled from "styled-components";
import { ConteinerButton } from "../../../components/Button/style";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form{
    display: flex;
    flex-direction: column;
    gap: 25px;
    background: #565656;
    border-radius: 10px;
    padding: 20px;
    width: 371px;
  }
`
export const Label = styled.label`
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 3px;
  display: block;
`
export const Input = styled.input`
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: none;
  width: 100%;
  outline: none;
  padding-left: 10px;
`
export const Button = styled(ConteinerButton)`
  width: 100%;
  margin-top: 25px;
`
export const LabelUpload = styled.div`
  cursor: pointer;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* border: 1px dashed #ffffff;
  border-radius: 5px;
  padding: 10px; */
  gap: 5px;
  height: 45px;
`
export const InputImg = styled.input`
  /* display: none; */
  padding: 11px;
  opacity: 0;
  /* position: absolute; */
  grid-row: 1/2;
  grid-column: 1/3;
  width: 100%;
`
export const DivArquivo = styled.div`
  grid-row: 1/2;
  grid-column: 1/3;
`
export const Divgridbutton = styled.div`
  display: grid;
  grid-auto-columns: 50% 50%;
  grid-template-rows: 1fr;
  height: 100%;
  border: 1px dashed #ffffff;
  border-radius: 5px;
  align-items: center;
  text-align: center;
`