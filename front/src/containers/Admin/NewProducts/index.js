import { Container,Label,Input,Button,LabelUpload,InputImg,DivArquivo,Divgridbutton } from './style.js'
import { ErrorMessageStyles } from '../../../components/ErrorMensage/style.js';
import apiPierBurguer from '../../../services/api.js'
import { yupResolver } from '@hookform/resolvers/yup';
import { useState,useEffect } from 'react'
import { useForm,Controller } from 'react-hook-form' // Controller Permite o uso De libery como mui e outras de componente para que eles funcionem dentro do reacthookform criando uma tag interface para configuraçoes.
import ReactSelect from 'react-select'

import * as yup from 'yup'

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { getLinearProgressUtilityClass } from '@mui/material';
import { toast } from 'react-toastify';

const onSubmit = async (data) => {
  const productDataFormData = new FormData()  // Para poder enviar os dados de imagem para o back ende devemos formatar os dados em FormData
  // Na primeira prop do append adicionamos um nome ao campo referenciando para que o yup do back end o Valid. E o Na segunda proprie o valor . 
  // console.log("data.name",data.name,"data.price",data.price,"data.category",data.category,"data.file",data.file, "Proprio Data", data);

  productDataFormData.append('name',data.name)  
  productDataFormData.append('price',data.price)
  productDataFormData.append('category_id',data.category.id)
  productDataFormData.append('file',data.file[0])
  
  await toast.promise(
    apiPierBurguer.post('/products',productDataFormData),
    {
      pending: 'Criando novo produto ... ',
      success: 'Produto Criado com sucesso',
      error: 'Falha ao Criar o produto'
    }
  )
}

const NewProducts = () => {
  const [ fileSize, setfileSize ] = useState(null)
  const [ fileName, setfileName ] = useState(null)
  const schema = yup.object().shape({ 
    name: yup.string().required('Digite O nome do Produto'),
    price: yup.string().required('Digite O preço do Produto'),
    category: yup.object().required('Escolha Uma Categoria'),
    file: yup.mixed().test('required','Carregue um arquivo', () => {
      return fileName && fileName.length > 0
    }).test('fileSise', 'Carregue arquivo de até 2mb', () => {
      return fileSize >= 200000
    })  // test Da a possibilidade de Fazer varios testes. A Menssagem de erro vem sempre como segunda prop.
  })

  const [ categories,setcategories ] = useState([])
  const { register,
    handleSubmit,
    control, 
    // formState Recebe Todos os erros do form.
    formState: { errors } 
  } = useForm({ resolver: yupResolver(schema) }) // {: yupResolver(schema) } Faz uma Validaçao dos dados do form com base no yup para determinar o erro.

  useEffect(() => {
    async function loadCategories() {
      const { data } = await apiPierBurguer.get('categories')

      setcategories(data)
    }
    loadCategories() // Chamando a funçao para q ela possa ser executado

  }, [])

  return(
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input type='text' {...register('name')} />
          <ErrorMessageStyles>{errors.name?.message}</ErrorMessageStyles>
        </div>
    
        <div>
          <Label>Preço</Label>
          <Input type='number' {...register('price')} />
          <ErrorMessageStyles>{errors.price?.message}</ErrorMessageStyles>
        </div>
        <LabelUpload>
        <Divgridbutton>
          <ErrorMessageStyles>{errors.file?.message}</ErrorMessageStyles>
          <DivArquivo>
            { fileName || (
                <>
                <CloudUploadIcon />
                Carrega A imagem do produto
                </>
              )}
          </DivArquivo>
            <InputImg
            {...register('file')}  //  Se esse input tiver id ele nao vai registrar
            accept='image/png, image/jpeg'
            type= 'file'
            onChange={value => {
              setfileName(value.target.files[0]?.name)  // O ? Elvis Operador nesse codigo verifica se existe algum dado apos o . se nao tiver ele ignora Fazendo o codgo nao quebrar caso ele nao encontre.
              setfileSize(value.target.files[0]?.size)
            }}
            />
        </Divgridbutton>
        </LabelUpload>
        <div>
          <Controller
           name='category'
           control={control}  // Anexa A capacida ao elemento de poder enviar e guardar dados
           render={({field}) => {  // render faz a renderizaçao
            return(
              <ReactSelect
              {...field}  // Derammando os os atributos que vem em field .
              options={categories}  // Opçoes do Select
              getOptionLabel={cat => cat.name}  // getOptions Pega os dados do atributo  'options'.  e determina o caminho da quilo que cada opçao devera ter como label.
              getOptionValue={cat => cat.id}  // getOptionValue Determina Qual valor Que devera ser Enviado a cada option.
              placeholder='Categoria'
            />
            )
           }}
           >
          </Controller>
        </div>
        <ErrorMessageStyles>{errors.category?.message}</ErrorMessageStyles>
        <Button type="submit">Adicionar Produto</Button>
      </form>
    </Container>  
  )
}

export default NewProducts