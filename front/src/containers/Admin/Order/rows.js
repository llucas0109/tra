import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import moment from 'moment';  // Determina data hora
import apiPierBurguer from '../../../services/api.js';
import ReactSelect from 'react-select';  // Cria um select ja costumizavel
import status from './order-status.js';


// moment().format();
import { Container,Img,ReactSelectStyled } from "./style.js";
import React, { useEffect } from "react";


function Row({row,setOrders,orders}){
  const [open, setOpen] = React.useState(false);
  const [isLoading,setisLoading] = React.useState(false)  // React.useState é Usado para desestruturar o usestate sem precisar declarar em import.

  async function setNewsStatus(id,status){
    setisLoading(true)
    try{
      await apiPierBurguer.put(`/orders/${id}`, { status } )
      const newOrder = orders.map(order => {
        return order._id === id ? { ...order, status } : order
      })
      setOrders(newOrder) // Atualizando Dados do array que que esta em outro arquivo. 
    }catch(err){
      console.log(err);
    }finally{ // depois do catch ou try ele cai aqui
      setisLoading(false)
    }
  }

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.orderId}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{moment(row.date).format('do MMMM YYYY h:mm:ss') }</TableCell>
        <TableCell>
          <ReactSelectStyled 
          options={status.filter(sts => sts.value !== 'Todos')}
          menuPortalTarget={document.body} 
          placeholder='Status'
          defaultValue={status.find(option => option.value === row.status) || null} 
          onChange={ newStatus => {
            setNewsStatus(row.orderId, newStatus.value)
          }} 
          isLoading={isLoading}/>  { /* isLoading Gera A animaçao de loading */ }
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Pedido
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Quantidade</TableCell>
                    <TableCell>Produto</TableCell>
                    <TableCell>Categoria</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((productRow) => (
                    <TableRow key={productRow.id}>
                      <TableCell component="th" scope="row">
                        {productRow.quantity}
                      </TableCell>
                      <TableCell>{productRow.name}</TableCell>
                      <TableCell>{productRow.category}</TableCell>
                      <TableCell>
                        <Img src={productRow.url} alt='Imagem do Produto' />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  orders: PropTypes.array,
  setOrders: PropTypes.func,
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    orderId: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        quantity: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
    ).isRequired
    
  }).isRequired
};
    
  

export default Row