import { database, storage,ID } from "../lib/appwrite"

const useAppwrite = () => {
    const fromDatabase = (databaseId: string) => {
        const collection = (collectionId: string) => {
            const getDocuments = async (queries?: string[]) => {
                return await database.listDocuments(databaseId, collectionId, queries)
            }

            const getDocumentById = async (documentId: string, queries?: string[]) => {
                return await database.getDocument(databaseId, collectionId, documentId, queries)
            }

            const createDocument = async (data: object) => {
                return await database.createDocument(databaseId, collectionId, ID.unique(), data)
            }

            const updateDocument = async (documentId: string, data: object) => {
                return await database.updateDocument(databaseId, collectionId, documentId, data)
            }

            const deleteDocument = async (documentId: string) => {
                return await database.deleteDocument(databaseId, collectionId, documentId)
            }

            return {
                getDocumentById, getDocuments, createDocument, updateDocument, deleteDocument
            }
        }

        return {
            collection
        }
    }
    const fromStorage = () => {
        const bucket = (bucketId: string) => {
            const createFile = async (fileId: string, file: File) => {
                return await storage.createFile(bucketId, fileId, file)
            }

            const deleteFile = async (fileId: string) => {
                return await storage.deleteFile(bucketId, fileId)
            }

            // getFile retorna un objeto con todos los datos del archivo
            // getFileDownload retorna el url del archivo y además lo descarga
            // getFilePreview retorna la url del archivo para visualizarlo, no lo descarga
            // getFileView retorna la url del archivo para visualizarlo, no lo descarga

            const getFile = async (fileId: string) => {
                const file = await storage.getFile(bucketId, fileId)
                const downloadUrl = storage.getFileDownload(bucketId, fileId)
                const previewUrl = storage.getFilePreview(bucketId, fileId)

                return { file, downloadUrl, previewUrl }
            }

            const updateFileName = async (fileId: string, name: string) => {
                return await storage.updateFile(bucketId, fileId, name)
            }

            return {
                createFile, deleteFile, getFile, updateFileName
            }
        }

        return {
            bucket
        }
    }
    return {
        fromDatabase,fromStorage
    }
}

export default useAppwrite