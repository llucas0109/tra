import { FunkyContainer, VibrantBox, DynamicWrapper, QuirkySection, ColorfulPanel } from './style';
import { useEffect, useState } from 'react';
import apiService from '../../services/api';

const Servicos = () => {
  const [service,setservice] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await apiService.get('/servicos');
      setservice(data) // Atualizando o useState
    }
    loadCategories() // Chamando a funçao para q ela possa ser executado

  }, [])
  console.log(service);
  return(
      <DynamicWrapper>
        {/* {service && service.map((servicos) => (
          <VibrantBox key={servicos.nome}>
            {servicos.nome}
          </VibrantBox>
        ))} */}
      </DynamicWrapper>
  )
}

export default Servicos