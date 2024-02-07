import { Container,ContainerItens } from "./style";
import Orders from "./Order/index";
import Product from "../Products/index.js";
import SideMenuAdmin from "../../components/SideMenuAdmin";
import ListProducts from "./ListProducts/index.js";
import PropTypes from 'prop-types'
import listLinks from "../../components/SideMenuAdmin/menu-list.js";
import NewProducts from "./NewProducts/index.js";
import EditProducts from "./EditProducts/index.js";

function Admin({Atr}){  // Procura por path em match  

  return(
    <Container>
      <SideMenuAdmin path={Atr} />
      <ContainerItens>
        { Atr == '/pedidos'  && <Orders /> }
        { Atr == '/listar-pedidos' && <ListProducts /> }    
        { Atr == '/novo-produto' && <NewProducts /> }  
        { Atr == '/editar-produto' && <EditProducts /> }  
      </ContainerItens>
    </Container>
  )
}

export default Admin

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}
