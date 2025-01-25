import {Box,Button,FormControl,Link,Menu,MenuButton,MenuItem,MenuList,Modal,ModalBody, ModalContent, ModalHeader,TabPanel, TabPanels,Tabs, useDisclosure,} from "@chakra-ui/react";
import Formulario from "../lib/Formulario";
// import BtnLogout from "./BtnLogout";
import { LuCircleUserRound } from "react-icons/lu";
// import IconLogin from "./IconLogin";
import { FaBuilding } from "react-icons/fa";
import IconLogin from "./IconLogin";

const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
   
  return (
  <>
  <Box as="div" display="flex"  justifyContent="space-between" margin="0" backgroundColor="#010101" padding="20px" alignItems={'center'}
  backgroundImage={'../../../public/Build2.png'} backgroundRepeat={'no-repeat'} backgroundPosition={'center'} backgroundSize={'50%'}
   sx={{
    '&:hover': {
        backgroundColor: '#ed4245'
    }
    }}>
      <Box as="div" color="white" display={'flex'}>
      {/* <img src="../../../public/edificioDG4.png" alt="Logo" style={{width:'60px', marginRight:'10px'}} /> */}
        <Box as='div' style={{ color: "#fff", fontWeight: "700", fontSize: "20px", display:'flex', alignItems:'center', justifyContent:'center'}}>
          <Link _hover={'none'} fontSize={'30px'} href="/" > 
            <Box as="div" display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'5px'}>
              <Box as='p' ><FaBuilding /></Box> 
              <Box as='h1'>DG4</Box>
            </Box>
          
          </Link>
        </Box>
     </Box>
     {/* <img src="../../../public/Build.png" alt="build" style={{width:'320px'}} /> */}
    <Box as="div" display="flex" justifyContent="space-between" gap="5" color="white" >

      <Menu >
     
        <Box as="div" display={'flex'} gap={'10px'} alignItems={'center'}>
        <Menu>
            <MenuButton>
                <Box display='flex' gap='10px' alignItems='center'> <LuCircleUserRound /> Cuenta</Box>
            </MenuButton>
            <MenuList color='#1a1a1a'>
                {/* <MenuItem>Ver Perfil</MenuItem> */}
                <MenuItem>
                  <Button type="submit" onClick={onOpen} color={'black'} w={'100%'} textAlign={'center'} bgColor={'white'} >
                    Iniciar Session 
                  </Button> 
                  {/* <BtnIniSession/> */}
                  </MenuItem>
                {/* <MenuItem>
                  <BtnLogout/>
                </MenuItem> */}
            </MenuList>
        </Menu>
        {/* <Button type="submit" onClick={onOpen} colorScheme="blue" color={'white'} backgroundColor={'red'}>Iniciar Session </Button> 
        <BtnLogout/> */}
        </Box>
         <Modal isOpen={isOpen} onClose={onClose}>
         <ModalContent height={"650px"} width={"550px"} fontFamily={'sans-serif'} 
           backgroundImage={'../../../public/fondoLogo1.jpg'} backgroundPosition={'center'} backgroundRepeat={'no-repeat'}backgroundSize={'cover'} >
             <ModalHeader textAlign={"center"} marginTop={'20px'} fontSize={'35px'} fontFamily={'sans-serif'} fontWeight={'700'} color={'#fff'}>Departamentos DG4</ModalHeader>
             <ModalBody>
               <Tabs variant="enclosed">
                 <Box display={'flex'} justifyContent={'center'} marginTop={'20px'}>
                   {/* --------------------Login--------------- */}
                   <IconLogin/> 
                   {/* <Box as="h2" fontSize={'30px'}>Login</Box> */}
                 </Box> 
                 <TabPanels>
                   <TabPanel marginTop={"50px"}>
                     <FormControl isRequired>
                      <Formulario/>
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
