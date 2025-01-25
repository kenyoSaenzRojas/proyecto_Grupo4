import { Client,Databases,Storage,ID, Account} from 'appwrite';
import { Appwrite } from './env';

export const client = new Client();

client
    .setProject(Appwrite.proyectoId)
    .setEndpoint('https://cloud.appwrite.io/v1')
    
const database=new Databases(client)
const storage=new Storage(client)
const account = new Account(client);
export{
    database,storage,account,ID
}
export default client;