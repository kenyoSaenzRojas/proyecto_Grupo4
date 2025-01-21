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
       <Button type="submit" w={'220px'} color={'black'}  bgColor={'white'} textAlign={'center'}
       onClick={async () => {
         await account.deleteSession('current'); setLoggedInUser(true); navigate('/') }} >  
              Cerrar Session
        </Button>
        
    </Box>
  )
}

export default BtnLogout
