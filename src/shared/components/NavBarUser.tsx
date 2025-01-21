import {Box,FormControl,Menu,MenuButton,MenuItem,MenuList,Modal,ModalBody, ModalContent, ModalHeader,TabPanel, TabPanels,Tabs, useDisclosure} from "@chakra-ui/react";
import Formulario from "../lib/Formulario";
// import BtnLogout from "./BtnLogout";
import { LuCircleUserRound } from "react-icons/lu";
// import IconLogin from "./IconLogin";
import { FaBuilding } from "react-icons/fa";
import BtnLogout from "./BtnLogout";

// import BtnIniSession from "./BtnIniSession";


const NavBarUser = () => {

    const { isOpen,onOpen, onClose } = useDisclosure();
   
  return (
    // #010101  #151617  hover #213555
  <>
  
  <Box as="div" display="flex"  justifyContent="space-between" margin="0" backgroundColor="#010101" padding="30px" alignItems={'center'}
  backgroundImage={'../../../public/Build2.png'} backgroundRepeat={'no-repeat'} backgroundPosition={'center'} backgroundSize={'50%'}
   sx={{
    '&:hover': {
        backgroundColor: '#a47454'
    }
    }}>
      <Box as="div" color="white" display={'flex'}>
      {/* <img src="../../../public/edificioDG4.png" alt="Logo" style={{width:'60px', marginRight:'10px'}} /> */}
        <Box as='div' style={{ color: "#fff", fontWeight: "700", fontSize: "30px", display:'flex', alignItems:'center', justifyContent:'center'}}>
          {/* <Link _hover={'none'} fontSize={'30px'} href="/" >  */}
            <Box as="div" display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'5px'}>
              <Box as='p' ><FaBuilding /></Box> 
              <Box as='h1'>DG4</Box>
            </Box>
          
          {/* </Link> */}
        </Box>
     </Box>
     {/* <img src="../../../public/Build.png" alt="build" style={{width:'320px'}} /> */}
    <Box as="div" display="flex" justifyContent="space-between" gap="5" color="white" >

      <Menu >
     
        <Box as="div" display={'flex'} gap={'10px'} alignItems={'center'}>
        <Menu>
            <MenuButton>
                <Box display='flex' gap='10px' alignItems='center'> <LuCircleUserRound /> Usuario</Box>
            </MenuButton>
            <MenuList color='#1a1a1a'>
                <MenuItem>
                   <BtnLogout/> 
                </MenuItem> 
            </MenuList>
        </Menu>
        {/* <Button type="submit" onClick={onOpen} colorScheme="blue" color={'white'} backgroundColor={'red'}>Iniciar Session </Button> 
        <BtnLogout/> */}
        </Box>
         <Modal isOpen={isOpen} onClose={onClose}>
           <ModalContent height={"650px"} width={"550px"} fontFamily={'sans-serif'} 
           backgroundImage={'../../../public/fondoLogo.jpg'} backgroundPosition={'center'} backgroundRepeat={'no-repeat'}backgroundSize={'500px'} >
             <ModalHeader textAlign={"center"} marginTop={'20px'} fontSize={'35px'} fontFamily={'sans-serif'}  color={'white'}>Departamentos DG4</ModalHeader>
             <ModalBody>
               <Tabs variant="enclosed">
                 <Box display={'flex'} justifyContent={'center'} marginTop={'20px'}>
                   {/* --------------------Login--------------- */}
                   {/* <IconLogin/>  */}
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

export default NavBarUser