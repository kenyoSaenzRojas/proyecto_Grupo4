// import { Client, Databases, Storage } from 'appwrite'
// import { Appwrite } from './env'

// const client = new Client()
// client.setProject(Appwrite.projectId)
//     .setEndpoint('https://cloud.appwrite.io/v1')

// const database = new Databases(client)
// const storage = new Storage(client)

// export {
//     database, storage
// }


// import { Client, Account} from 'appwrite';

// export const client = new Client();

// client
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('67803989002e277b9814'); // Replace with your project ID

// export const account = new Account(client);
// export { ID } from 'appwrite';





import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67803989002e277b9814'); // Replace with your project ID

export const account = new Account(client);
export default client;