import { useState } from 'react';
import { account} from './appwrite';
// import { useNavigate } from 'react-router-dom';  // Importar useNavigate
// import { ID } from './appwrite';
import { Box, Button, FormControl, FormLabel, Input, Spinner } from '@chakra-ui/react';
// import BtnLogout from '../components/BtnLogout';
import { useNavigate } from 'react-router-dom';

const Formulario = () => {
  const [loggedInUser, setLoggedInUser] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [name, setName] = useState('');

 const navigate = useNavigate();


  async function login(email: string, password: string) {
    await account.createEmailPasswordSession(email, password);
    setLoggedInUser(await account.get());
    navigate('/perfil');

    if (email=="vigilante@dg4.com" || email=="vigilante1@dg4.com" ) {
      navigate('/lista');
    }
    <Spinner color="#000" size={'md'} />
  }

  return (
    <Box as='div'>
      <Box as='p' textAlign={'center'} mt={'-30px'} mb={'40px'} fontFamily={'sans-serif'} color={'#fff'} fontWeight={'900'} fontSize={'30px'}>
        {loggedInUser ? `Bienvenido ` : 'Bienvenido'}
      </Box>

      <FormControl isRequired >
        <FormLabel htmlFor="email" fontSize={'20px'} color={'#fff'} fontWeight={'700'}> Correo</FormLabel>
        {/* <Input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />  */}
        <Input type="email" placeholder="Email" bgColor={'#fff'} value={email} onChange={e => setEmail(e.target.value)} />  
        <FormLabel htmlFor="Password" marginTop={"30px"} color={'#fff'} fontSize={'20px'} fontWeight={'700'}>Contraseña</FormLabel>
        <Input type="password" placeholder="Password" bgColor={'#fff'} value={password} onChange={e => setPassword(e.target.value)} />

        <Button type="submit" marginTop={"50px"} width={"100%"} colorScheme="blue" fontFamily={'sans-serif'} backgroundColor={'#37AFE1'} 
        onClick={() => login(email, password)}>
              Login
        </Button>
      </FormControl>
    </Box>
  );
};

export default Formulario;
