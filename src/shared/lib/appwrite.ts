import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('67803989002e277b9814'); // Replace with your project ID

export const account = new Account(client);
export default client;