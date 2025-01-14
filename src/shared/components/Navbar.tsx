import {Box,Button,FormControl,Link,Menu,Modal,ModalBody, ModalContent, ModalHeader,TabPanel, TabPanels,Tabs, useDisclosure,} from "@chakra-ui/react";
import Formulario from "../lib/Formulario";
import BtnLogout from "./BtnLogout";

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
   
  return (
  <>
  <Box as="div" display="flex" justifyContent="space-between" margin="0" backgroundColor="#151617" padding="20px" alignItems={'center'} >
      <Box as="div" color="white">
        <h1 style={{ color: "#FF385C", fontWeight: "700", fontSize: "20px" }}>
        <Link _hover={'none'} fontSize={'35px'} href="/">DG4</Link>
         </h1>
     </Box>
    <Box as="div" display="flex" justifyContent="space-between" gap="5" color="white" >
      <Menu >
        {/* <Link href="/">Inicio</Link>
        <Link href='lista'>Lista de Departamentos</Link>
        <Link href="reserva">Reserva</Link> */}
        {/* -------------- */}
        <Box as="div" display={'flex'} gap={'10px'} alignItems={'center'}>
        <Button type="submit" onClick={onOpen} colorScheme="blue" color={'white'} backgroundColor={'red'}>Iniciar Session</Button>
          <BtnLogout/>
        </Box>
         <Modal isOpen={isOpen} onClose={onClose}>
           <ModalContent height={"650px"} width={"550px"} fontFamily={'sans-serif'} >
             <ModalHeader textAlign={"center"} marginTop={'20px'} fontSize={'35px'}>Departamentos DG4</ModalHeader>
             <ModalBody>
               <Tabs variant="enclosed">
                 <Box display={'flex'} justifyContent={'center'} marginTop={'20px'}>
                   <Box as="h2" fontSize={'30px'}>Login</Box>
                 </Box> 
                 <TabPanels>
                   <TabPanel marginTop={"50px"}>
                     <FormControl isRequired>
                        
                      <Formulario/>
                       {/* <FormLabel htmlFor="email">Usuario/ Correo</FormLabel>
                       <Input id="email" type="email" placeholder="E-mail" required />        
                       <FormLabel htmlFor="Password" marginTop={"30px"}>
                        Password
                      </FormLabel>
                      <Input id="Password" type="password" placeholder="Password" required />
                      <Button marginTop={"50px"} width={"100%"} colorScheme="blue" fontFamily={'sans-serif'} backgroundColor={'#37AFE1'}>
                        Entrar
                      </Button> */}
                    </FormControl>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </ModalBody>
           </ModalContent>
        </Modal>
      </Menu>
    </Box>
  </Box>
  
  </>)
}

export default Navbar
