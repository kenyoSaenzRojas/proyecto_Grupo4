import { Box, Card, CardBody,Heading, Image, Stack} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { storage } from "../../lib/appwrite"
import { Appwrite } from "../../lib/env"

const Departamento = ({depas,onClick}) => {
    const [imageUrl,setImageUrl]=useState()
    const fotoUrl=async()=>{
        const url=await storage.getFilePreview(Appwrite.buckets.departamentosimg,depas.fotoId)
        setImageUrl(url)
      }
    useEffect(()=>{
        fotoUrl()
    },[])
    return (
        <>
            <Card maxW='sm' onClick={onClick} cursor='pointer'>
                <CardBody>
                    <Box key={depas.departamento}>
                        <Stack mt='6' spacing='3' textAlign='center'>
                            <Heading size='md'>{depas.departamento}</Heading>
                        </Stack>
                        <Image src={imageUrl} borderRadius='lg'/>
                    </Box>
                </CardBody>
            </Card>
        </>
    )
}

export default Departamento