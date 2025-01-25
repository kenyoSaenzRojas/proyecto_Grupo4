import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Visitas } from "../shared/declaraciones/database"
import { Button, Flex, Grid, GridItem, Heading, Image, Stack, Textarea, useToast } from "@chakra-ui/react"
import Navbar from "../shared/components/Navbar"
import { format } from "date-fns"
import { database, storage } from "../shared/lib/appwrite"
import { Appwrite } from "../shared/lib/env"
import NavBarUser from "../shared/components/NavBarUser"
import { FaLongArrowAltLeft } from "react-icons/fa"

const DetalleVisita = () => {
    const toast=useToast()
    const {visitaid}:{visitaid:string}=useParams()
    const navigate=useNavigate()
    const [visita,setVisita]=useState<Array<Visitas>>(null)
    const [foto,setFoto]=useState(null)
    const obtenerVisita=async()=>{
        const document= await database.getDocument(Appwrite.databaseId,Appwrite.collections.visitas,visitaid)
        setVisita(document)
        obtenerFoto(document.Id_Departamento)
    }
    const obtenerFoto=async(id_depa)=>{
        const document=await database.getDocument(Appwrite.databaseId,Appwrite.collections.departamentos,id_depa)
        const fotoid=storage.getFilePreview(Appwrite.buckets.departamentosimg,document.FotoId)
        setFoto(fotoid)
    }
    useEffect(()=>{
        obtenerVisita()
    },[visitaid])

    const finalizarVisita=async(e:React.MouseEvent)=>{
        const fechasalida=new Date().toISOString()

        await database.updateDocument(Appwrite.databaseId,Appwrite.collections.visitas,visitaid,
            {
                Fecha_fin:fechasalida,
                Estado:0,
            }
        )
        navigate('/lista')
        toast({
            title: 'Visita Finalizada correctamente',
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
        console.log('Finalizar visita')
    }
    const atras=async()=>{
        
        navigate("/lista")
    }

    const fecha=visita?.Fecha_ing? format(new Date(visita?.Fecha_ing),'dd/MM/yyyy'):'Fecha no Disponible'
    const hora=visita?.Hora_ing? format(new Date(visita?.Hora_ing),'HH:mm:ss'):'Hora no Disponible'
  return (
    <div>
      <>
        <NavBarUser/>
        <Heading textAlign='center' paddingTop='20px' > 
            <Button marginRight={'50px'} alignItems={'center'} colorScheme='teal' size='sm' onClick={atras}> <FaLongArrowAltLeft /></Button>
            {`VISITA DEPARTAMENTO ${visita?.Departamento}`}</Heading>
        <Grid templateColumns='repeat(2, 1fr)' gap={6} p={10} >
            <GridItem w='100%' h='10'  border='1px solid blue'>
                {foto?(
                    <Image src={foto}/>
                ):(
                    <p>Cargando.....</p>
                )
                }
            </GridItem>
            <GridItem w='500px' h='auto' p={4} border='1px solid blue'>
                <Stack mt='6' spacing='3' textAlign='left'>
                    <Heading size='md'>{`Fecha Ing: ${fecha} ${hora}`}</Heading>
                    <Heading size='md'>{`DNI : ${visita?.DNI}`}</Heading>
                    <Heading size='md'>{`Propietario : ${visita?.Propietario}`}</Heading>
                    <Heading size='md'>{`Visitante : ${visita?.Visitante}`}</Heading>
                    <Heading size='md'>Comentario</Heading>
                    <Textarea readOnly value={visita?.Comentario} size='sm' border="1px solid"/>
                </Stack>
                <Flex justify='center' mt={4}>
                    
                    <Button colorScheme='teal' size='md' onClick={finalizarVisita}>
                        Finalizar Visita
                    </Button>
                    
                </Flex>
            </GridItem>
        </Grid>
      </>
    </div>
  )
}

export default DetalleVisita