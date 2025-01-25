import { Client, Databases, Query, Account } from "appwrite";
import { Appwrite } from "../hooks/env";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(Appwrite.projectId);                 // Your project ID

const account = new Account(client);
const databases = new Databases(client);

// Usuario autenticado
const user = await account.get();
const userId = user.$id;

// Coleccion de usuarios con ID unico
const response = await databases.listDocuments(
    Appwrite.databaseId,               // databaseId
    Appwrite.collections.usuariosID,    // collectionId de usuarios
    [Query.contains('User', userId)]    // Query para buscar el userId
);

// Obtener el ID del departamento del primer documento, nunca estara vacio
const DocUser = response.documents[0].IDdepartamento;


const departamento = await databases.getDocument(
    Appwrite.databaseId,                       // databaseId
    Appwrite.collections.departamentId,         // collectionId de departamentos
    DocUser                                     // ID del departamento
);


export const DepaDoc = {
    propietario: departamento.propietario,
    fotoID: departamento.fotoID,
    departamento: departamento.departamento,
}


//     const user = await account.get();
//     const userId = user.$id;

// let Usuario = databases.listDocuments(
//     Appwrite.databaseId, // databaseId
//     Appwrite.collections.usuariosID, // departamentId
//     [Query.contains('User', userId)] // query del userID (Unico)
// );

// Usuario.then((response) => {
//     let DocUser = response.documents[0].IDdepartamento; // ID del departamento (atributo) de coleccion Usuario
// }   );

// let Departamento = databases.getDocument(
//     Appwrite.databaseId, // databaseId
//     Appwrite.collections.departamentId, // departamentId
//     DocUser // ID del departamento
// );


// const DepaDoc = () => {
    
//     result.documents.map(() => {
//         console.log();
//     });

// }





