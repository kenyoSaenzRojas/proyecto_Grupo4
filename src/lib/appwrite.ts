import {Client, Databases,Storage,ID} from 'appwrite'
import { Appwrite } from './env'
const client=new Client()
client.setProject(Appwrite.proyectoId).setEndpoint('https://cloud.appwrite.io/v1')

const database=new Databases(client)
const storage=new Storage(client)

export{
    database,storage,ID
}
