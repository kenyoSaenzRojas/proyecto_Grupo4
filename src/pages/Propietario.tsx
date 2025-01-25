import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Image, Input, Spinner, Stack, useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { database, storage } from "../shared/lib/appwrite";
import { Appwrite } from "../shared/lib/env";
import { FaUserCircle } from "react-icons/fa";


const Propietario = () => {
  const [foto,setFoto]=useState(null)
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  //const [telefono, setTelefono] = useState('');
  const [torre, setTorre] = useState('');
  const [departamento, setDepartamento] = useState('');

  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState(false);

  const obtenerFoto=async()=>{
    const fotoid=storage.getFilePreview(Appwrite.buckets.departamentosimg,'67955c730012a9c3d398')
    setFoto(fotoid)
}

  const handleChange = (r) => {
    const value = r.target.value;

  //   // Verificamos si el valor contiene solo números
    if (/^\d*$/.test(value)) {
      setTelefono(value);
      setError(false);
    } else {
      setError(true);
    }
  }

const navigate = useNavigate()

const [loading, setLoading] = useState(false); // Para mostrar el estado de carga


  const toast = useToast();

  const manejarEnvio = (e) => {
    e.preventDefault();
    // Aquí podrías manejar el envío de los datos, como enviarlos a una API
    toast({
      title: 'Cliente creado.',
      description: `Nombre: ${nombre}, Correo: ${correo}, Teléfono: ${telefono}, Torre: ${torre}, Departamento:${departamento}`,
      status: 'success',
      duration: 1000,
      isClosable: true,
    });
    // Limpiar formulario
    setNombre('');
    setCorreo('');
    setTelefono('');
    setTorre('');
    setDepartamento('');

    setLoading(true); // Inicia el estado de carga
    
 // Hacemos una pausa de 2 segundos antes de redirigir
    setTimeout(() => {
      navigate('/reserva'); // Redirige a la página de CONTACTOS
    }, 2000); // 4000ms = 2 segundos

  };
    useEffect(()=>{
      obtenerFoto()
    },[])

  return (

  

<Flex 
      direction={{ base: 'column', md: 'row' }}  // En pantallas pequeñas será columna, en grandes será fila
      align="stretch"  // Asegura que ambos (formulario e imagen) tengan la misma altura
      justify="center"  // Alineación horizontal al centro
      height="100vh"  // Ocupa toda la altura de la ventana
      p={5}
    >
      {/* Imagen al costado izquierdo */}

      <Box flex="1" p={4} display={{ base: 'none', md: 'block' }} height="100%"  borderRadius="md" boxShadow="md" bg="white">
          {foto?(
              <Image  src={foto} height='600px' borderRadius='50%'/>
              
          ):(
              <p>Cargando.....</p>
          )
          }   
      </Box>

      {/* Formulario */}
      <Box flex="1" p={4} height="100%" display="flex" flexDirection="column" justifyContent="center" borderWidth={1} borderRadius="md">
        {/* Título del formulario */}
        <Heading as="h1" size="xl" mb={6} textAlign="center">
          PROPIETARIO
        </Heading>

        
        <form onSubmit={manejarEnvio}>
          
          <Stack spacing={5}>
    
            <FormControl isRequired>
              <FormLabel htmlFor="nombre">Propietario</FormLabel>
              <Input
                id="nombre"
               type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre del Propietario"
              />
            </FormControl>

            <FormControl isRequired>
             <FormLabel htmlFor="correo">Correo electrónico</FormLabel>
              <Input
                 id="correo"
                 type="email"
                value={correo}
                 onChange={(e) => setCorreo(e.target.value)}
                 placeholder="Correo electrónico del Propietario"
              />
           </FormControl>


             <FormControl isInvalid={error}>
              <FormLabel htmlFor="telefono">Phone Number</FormLabel>
              <Input
                id="telefono"
                type="text" // El tipo 'text' se usa para permitir la validación personalizada
                value={telefono}
                onChange={handleChange}
                placeholder="Número de teléfono del Propietario"
               />
               {error && <FormErrorMessage>Solo se permite el ingreso de números</FormErrorMessage>}
             </FormControl>
            
            <FormControl>
              <FormLabel htmlFor="torre">Torre</FormLabel>
              <Input
                id="torre"
                 type="tor"
                 value={torre}
                 onChange={(e) => setTorre(e.target.value)}
                 placeholder="Torre de Ubicación del Propietario"
               />
             </FormControl>
 
           <FormControl>
              <FormLabel htmlFor="departamento">Departamento</FormLabel>
              <Input
                id="departamento"
                type="dep"
                 value={departamento}
                 onChange={(e) => setDepartamento(e.target.value)}
                 placeholder="Departamento del Propietario"
               />
             </FormControl>



            <Button colorScheme="teal" type="submit" mt={5} onClick={()=>navigate('/reserva')} isLoading={loading} loadingText="Redirigiendo...">
               Agregar Vista
             </Button>
             
            {loading && <Spinner size="lg" />}
         
          </Stack>

        </form>
      </Box>
    </Flex>

   

   
  )

}


export default Propietario