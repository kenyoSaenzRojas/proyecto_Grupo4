import { useState } from 'react';
import { account} from '../lib/appwrite';
import { Box, Button} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const BtnLogout = () => {
  const [loggedInUser, setLoggedInUser] = useState(true);

  const navigate = useNavigate();
//   async function login(email: string, password: string) {
//     await account.createEmailPasswordSession(email, password);
//     setLoggedInUser(await account.get());
//   }
  return (
    <Box >
       <Button type="button" marginTop={"50px"} width={"100%"} colorScheme="red" m={'0'} fontFamily={'sans-serif'} backgroundColor={'#37AFE1'}  onClick={async () => {
         await account.deleteSession('current'); setLoggedInUser(true); navigate('/') }} >  
              {/* <Link href='/'>Cerrar Session </Link>   */}
              Cerrar Session
        </Button>
        
    </Box>
  )
}

export default BtnLogout
