import { Box } from "@chakra-ui/react";
import Inicio from "../shared/components/Inicio";
import Navbar from "../shared/components/Navbar";



const Login = () => {


  return (
    <div>
      <Navbar/>
      <Box as="h1"textDecoration={'underline'}  marginTop={"20px"} marginBottom={"20px"} fontFamily={"sans-serif"} textAlign={"center"} fontWeight={"900"} color={"#3FA7C0"}  fontSize={"30px"} >
          Areas Comunes
        </Box>
      <Inicio/>
    </div>
  );
};

export default Login;
