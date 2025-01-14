import { useState } from 'react';
import { account} from './appwrite';
// import { useNavigate } from 'react-router-dom';  // Importar useNavigate
// import { ID } from './appwrite';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import BtnLogout from '../components/BtnLogout';
import { useNavigate } from 'react-router-dom';

const Formulario = () => {
  const [loggedInUser, setLoggedInUser] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [name, setName] = useState('');

console.log(loggedInUser);
console.log(email);
console.log(password);

 const navigate = useNavigate();


  async function login(email: string, password: string) {
    await account.createEmailPasswordSession(email, password);
    setLoggedInUser(await account.get());
    navigate('/perfil');

    if (email=="vigilante@dg4.com") {
      navigate('/lista');
    }
  }

  return (
    <Box as='div'>
      <Box as='p' textAlign={'center'} mt={'-30px'} mb={'40px'}>
        {loggedInUser ? `Bienvenido ${loggedInUser.name}` : 'Bienvenido a DG4'}
      </Box>

      <FormControl isRequired>
        <FormLabel htmlFor="email"> Correo</FormLabel>
        {/* <Input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />  */}
        <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />  
        <FormLabel htmlFor="Password" marginTop={"30px"}>Contraseña</FormLabel>
        <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

        <Button type="submit" marginTop={"50px"} width={"100%"} colorScheme="blue" fontFamily={'sans-serif'} backgroundColor={'#37AFE1'} 
        onClick={() => login(email, password)}>
              Login
        </Button>

        {/* <button type="button" onClick={async () => {
          await account.create(ID.unique(), email, password, name);
          login(email, password); }} >
            Register
        </button> */}

        {/* <Button type="button" marginTop={"50px"} width={"100%"} colorScheme="blue" fontFamily={'sans-serif'} backgroundColor={'#37AFE1'}  onClick={async () => {
            await account.deleteSession('current');
            setLoggedInUser(null); }} >
          Logout
        </Button> */}
        <BtnLogout/>
      </FormControl>
    </Box>
  );
};

export default Formulario;
