import { Button, Card, CardBody,Flex,Heading, Stack} from "@chakra-ui/react"
import { Visitas } from "../declaraciones/database"
import { format } from "date-fns"

const Visita = ({visitas}:{visitas:Visitas}) => {
    const fecha=visitas.Fecha_ing? format(new Date(visitas.Fecha_ing),'dd/MM/yyyy'):'Fecha no Disponible'
    const hora=visitas.Hora_ing? format(new Date(visitas.Hora_ing),'HH:mm:ss'):'Hora no Disponible'

    const finalizarVisita=(e:React.MouseEvent)=>{
        e.stopPropagation()
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