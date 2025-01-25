
import { Button, Text } from "@chakra-ui/react"
import NavBarUser from "../shared/components/NavBarUser"


const PerfilUser = () => {

  return (
    <div>
        <NavBarUser/>
         <Text> Perfil de usuarios: cada usuario puede ver su perfil</Text>
          <Button colorScheme='teal' size='md'>
              Registrar Visita
          </Button>
    </div>
  )
}

export default PerfilUser
