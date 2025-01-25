export const Appwrite = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,


    databaseId: import.meta.env.VITE_APPWRITE_STORE_DATABASE_ID,
    collections: {
        products: import.meta.env.VITE_APPWRITE_PRODUCTS_COLLECTION_ID
    }
}
