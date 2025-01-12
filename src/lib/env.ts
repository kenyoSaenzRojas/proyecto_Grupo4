export const Appwrite={
    proyectoId:import.meta.env.VITE_APPWRITE_PROJECT_ID,
    databaseId:import.meta.env.VITE_APPWRITE_STORE_DATABASE_ID,
    collections:{
        departamentos:import.meta.env.VITE_APPWRITE_DEPARTAMENTOS_COLLECTION_ID,
        visitas:import.meta.env.VITE_APPWRITE_VISITAS_COLLECTION_ID
    },
    buckets:{
        departamentosimg:import.meta.env.VITE_APPWRITE_DEPARTAMENTOSIMG_BUCKET_ID
    }
}