App_NumeroProyecto= 677eaca30005daac9b41
export const Appwrite = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    databaseId: import.meta.env.VITE_APPWRITE_STORE_DATABASE_ID,
    collections: {
        departamentId: import.meta.env.VITE_APPWRITE_PRODUCTS_COLLECTION_ID,
        visitId: import.meta.env.VITE_APPWRITE_VISITA_COLLECTION_ID,
        usuariosID: import.meta.env.VITE_APPWRITE_USUARIOS_COLLECTION_ID
    }
}