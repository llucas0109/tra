import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';
import formatCurrency from '../../../Utils/formatCurrency.js';

import { Container,Img,IconEdit } from './style.js'
import apiPierBurguer from '../../../services/api.js'
import { useState,useEffect } from 'react'
import { Navigate,useNavigate } from 'react-router-dom';

const ListProducts = () => {
  const [products,setproducts] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    async function loadOrders() {
      const { data } = await apiPierBurguer.get('products')

      setproducts(data)
    }

    loadOrders() // Chamando a funçao para q ela possa ser executado
  }, [])
 
  function isOffer(offertatus){

    if(offertatus){
      return <CheckBoxIcon style={{color: '#228822'}} />
    }

    return <CancelIcon style={{color: '#CC1717'}} />
  }

  function editProducts(product){

    navigate('/editar-produto',{state:{product}}) // 'state:' é Um Objeto Padrao Para envio de informaçoes para a location de react router dom
  }

  return(
    <Container>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Preço</TableCell>
            <TableCell align='center'>Produto em Oferta</TableCell>
            <TableCell>Imagem</TableCell>
            <TableCell>Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products && products.map(product => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell>{formatCurrency(product.price)}</TableCell>
              <TableCell align='center'>{isOffer(product.offer)}</TableCell>
              <TableCell> <Img src={product.url} alt='imagem-DoProduto' /></TableCell>
              <TableCell> <IconEdit onClick={() => editProducts(product)} />  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>  
  )
}
// Quando a funçao que vai ser chamada no onclick nao tiiver parametro semplesmente colocamos o nome dela caso ela tenha parametros devemos passar um arrow function.
export default ListProducts