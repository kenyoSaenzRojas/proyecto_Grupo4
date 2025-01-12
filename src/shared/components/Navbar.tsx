import {Box,Button,FormControl,FormLabel,Input,Link,Menu,Modal,ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay,Tab,TabList,TabPanel, TabPanels,Tabs, useDisclosure,} from "@chakra-ui/react";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    <Box as="div" display="flex" justifyContent="space-between" margin="0" backgroundColor="#151617" padding="20px" >
      <Box as="div" color="white">
        <h1 style={{ color: "#FF385C", fontWeight: "700", fontSize: "20px" }}>
          DG4
        </h1>
      </Box>
      <Box as="div" display="flex" justifyContent="space-between" gap="5" color="white" >
        <Menu >
          <Link href="/">Inicio</Link>
          <Link href='lista'>Lista de Visitas</Link>
          <Link href="reserva">Reserva</Link>
          {/* -------------- */}
          <Button onClick={onOpen} >Iniciar Session</Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent height={"650px"} width={"550px"}>
              <ModalHeader textAlign={"center"}>Departamentos DG4</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Tabs variant="enclosed">
                  <TabList display={"flex"} justifyContent={"center"}>
                    <Tab width={"50%"}>Login</Tab>
                    <Tab width={"50%"}>Registate</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel marginTop={"50px"}>
                      <FormControl isRequired>
                        <FormLabel htmlFor="email">Email address</FormLabel>
                        <Input id="email" type="email" placeholder="E-mail" required />        
                        <FormLabel htmlFor="Password" marginTop={"30px"}>
                          Password
                        </FormLabel>
                        <Input id="Password" type="password" placeholder="Password" required />
                        <Button marginTop={"50px"} width={"100%"} colorScheme="blue">
                          Entrar
                        </Button>
                      </FormControl>
                    </TabPanel>
                    <TabPanel>
                      <FormControl isRequired>
                        <FormLabel htmlFor="first-name" marginTop={"30px"}>Nombre</FormLabel>
                        <Input id="first-name" placeholder="First name" />
                        
                        <FormLabel htmlFor="email" marginTop={"30px"}>Email address</FormLabel>
                        <Input id="email" type="email" placeholder="E-mail" required />        
                        <FormLabel htmlFor="Password" marginTop={"30px"}>
                          Password
                        </FormLabel>
                        <Input id="Password" type="password" placeholder="Password" required />
                        <Button marginTop={"50px"} width={"100%"} colorScheme="blue">
                          Registarme
                        </Button>
                      </FormControl>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </ModalBody>

              {/* <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter> */}
            </ModalContent>
          </Modal>
        </Menu>
      </Box>
    </Box>
  
    </>
  )
}

export default Navbar
