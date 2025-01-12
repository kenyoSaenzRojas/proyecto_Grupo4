import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Visitas } from "../shared/declaraciones/database"
import { database } from "../lib/appwrite"
import { Appwrite } from "../lib/env"
import { Button, Flex, Grid, GridItem, Heading, Image, Stack, Textarea } from "@chakra-ui/react"
import Navbar from "../shared/components/Navbar"
import { format } from "date-fns"

const DetalleVisita = () => {
    const{visitaid}:{visitaid:string}=useParams()
    const [visita,setVisita]=useState<Array<Visitas>>(null)
    const obtenerVisita=async()=>{
        const document= await database.getDocument(Appwrite.databaseId,Appwrite.collections.visitas,visitaid)
        setVisita(document)
    }
    useEffect(()=>{
        obtenerVisita()
    },[visitaid])
    const finalizarVisita=(e:React.MouseEvent)=>{
        console.log('Finalizar visita')
    }
    const fecha=visita?.Fecha_ing? format(new Date(visita?.Fecha_ing),'dd/MM/yyyy'):'Fecha no Disponible'
    const hora=visita?.Hora_ing? format(new Date(visita?.Hora_ing),'HH:mm:ss'):'Hora no Disponible'
  return (
    <div>
      <>
        <Navbar/>
        <Heading textAlign='center' paddingTop='20px'>{`VISITA DEPARTAMENTO ${visita?.Departamento}`}</Heading>
        <Grid templateColumns='repeat(2, 1fr)' gap={6} p={10} >
            <GridItem w='100%' h='10'  border='1px solid blue'>
                <Image/>
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