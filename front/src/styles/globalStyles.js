import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import Roboto from './Roboto-Regular.ttf'

export default createGlobalStyle`
 @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), local('Roboto'),
    url(${Roboto}) format('truetype'),
    url(${Roboto}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', 'sans-serif';
  font-weight: 300;
 }
 ` 

