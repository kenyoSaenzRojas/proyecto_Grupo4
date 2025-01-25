import { Button, Card, CardBody,Flex,Heading, Stack, useToast} from "@chakra-ui/react"
import { format } from "date-fns"
import { Visitas } from "../declaraciones/database"
import { Appwrite } from "../lib/env"
import { database } from "../lib/appwrite"

const Visita = ({visitas,onVisitaFinalizada}:{visitas:Visitas,onVisitaFinalizada:()=>void}) => {
    const toast=useToast()
    const fecha=visitas.Fecha_ing? format(new Date(visitas.Fecha_ing),'dd/MM/yyyy'):'Fecha no Disponible'
    const hora=visitas.Hora_ing? format(new Date(visitas.Hora_ing),'HH:mm:ss'):'Hora no Disponible'

    const finalizarVisita=async(e:React.MouseEvent)=>{
        e.stopPropagation()
        const fechasalida=new Date().toISOString()
        await database.updateDocument(Appwrite.databaseId,Appwrite.collections.visitas,visitas.$id,
            {
                Fecha_fin:fechasalida,
                Estado:0,
            }
        )
        onVisitaFinalizada()
        toast({
            title:"Visita Finalizada",
            description:`La visita del Departamento ${visitas.Departamento} se ah finalizado`,
            status:"success",
            duration:5000,
            isClosable:true,
        })
        console.log('Finalizar visita')
    }
    return (
        <>
            <Card maxW='sm' bg='rgba(0, 0, 0, 0.2)' borderRadius='lg' boxShadow='md'>
                <CardBody>
                    <Heading size='lg' fontWeight='bold' textAlign='center' textColor='green'>{`Departamento ${visitas.Departamento}`}</Heading>

                    <Stack mt='6' spacing='3' textAlign='left'>
                        <Heading size='md'>{`Propietario : ${visitas.Propietario}`}</Heading>
                        <Heading size='md'>{`Visitante : ${visitas.Visitante}`}</Heading>
                        <Heading size='md'>{`Fecha Ing: ${fecha}`}</Heading>
                        <Heading size='md'>{`Hora Ing: ${hora}`}</Heading>
                    </Stack>
                    <Flex justify='center' mt={4}>
                        <Button colorScheme='teal' size='md' onClick={finalizarVisita}>
                            Finalizar Visita
                        </Button>
                    </Flex>
                </CardBody>
            </Card>
        </>
    )
}

export default Visita