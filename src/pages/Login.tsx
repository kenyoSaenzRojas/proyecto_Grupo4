import { Box } from "@chakra-ui/react";
import Inicio from "../shared/components/Inicio";
import Navbar from "../shared/components/Navbar";



const Login = () => {


  return (
    // bgImage={'../../public/BackgroungInicio10.jpg'} bgPosition={'bottom'} bgRepeat={'no-repeat'} bgSize={'cover'}
    <Box as="div" bgColor={'#f8f3f6'}>
      <Navbar/>
      <Box as="h1"  pt={"100px"} textAlign={"center"}  >
          {/* Areas Comunes */}
      </Box>
      <Inicio/>
    </Box>
  );
};

export default Login;