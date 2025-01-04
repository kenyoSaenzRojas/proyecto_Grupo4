import { Card, CardBody,Heading, Image, Stack} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Departamentos } from "../declaraciones/database"
import useAppwrite from "../useAppwrite"
import { Appwrite } from "../../lib/env"
import { Query } from "appwrite"

const Departamento = () => {
    const [departamentos,setDepartamentos]=useState<Array<Departamentos>>([])

    const {fromDatabase}=useAppwrite()
    const listaDepartamentos=fromDatabase(Appwrite.databaseId).collection(Appwrite.collections.departamentos)
    const getDepartamentos = async () => {
        const {documents} = await listaDepartamentos.getDocuments([])
        //setDepartamentos(documents)
    }
    useEffect(() => {
        getDepartamentos()
    }, [])
    return (
        <>
            <Card maxW='sm'>
            <CardBody>
                <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3' textAlign='center'>
                    <Heading size='md'>DEPARTAMENTO</Heading>
                </Stack>
            </CardBody>
            </Card>
        </>
    )
}

export default Departamento