import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { database, storage } from "../lib/appwrite";
import { Appwrite } from "../lib/env";
import { Box, Button, Divider, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Departamentos } from "../shared/declaraciones/database";

const DetalleDepartamento = () => {
    const { departamentoId } = useParams()
    const [depa, setDepa] = useState<Array<Departamentos>>()
    const [imageUrl, setImageUrl] = useState("")
    const navigate = useNavigate();  

    const obtenerDepartamento = async () => {
        const document = await database.getDocument(Appwrite.databaseId, Appwrite.collections.departamentos,'67788c7100139e3214fe');
        setDepa(document)
        const url = await storage.getFilePreview(Appwrite.buckets.departamentosimg, document.fotoId);
        setImageUrl(url);
    }
    useEffect(() => {
        obtenerDepartamento();
    }, [])
    return (
        depa && (
            <Box maxW="1200px" mx="auto" p={4}>
                <Flex align="center">
                    {/* Imagen del departamento */}
                    <Box flex="1" display='flex' justifyContent='center'>
                        <Image src={imageUrl} alt={`Departamento ${depa.departamento}`} borderRadius="lg" boxSize="100%" objectFit="cover" />
                    </Box>

                    {/* Detalles del departamento */}
                    <Box flex="2" display='flex' justifyContent='center'>
                        <Stack spacing={4}>
                            <Heading as="h1" size="lg">
                                Departamento {depa.departamento}
                            </Heading>
                            <Text fontSize="xl"><strong>Propietario:</strong> {depa.propietario}</Text>
                            <Text fontSize="xl"><strong>Torre:</strong> {depa.torre}</Text>
                            <Text fontSize="xl"><strong>Piso:</strong> {depa.piso}</Text>
                            <Text fontSize="xl"><strong>Cuartos:</strong> {depa.cuartos}</Text>
                            <Text fontSize="xl"><strong>Baños:</strong> {depa.banios}</Text>
                        </Stack>
                    </Box>
                </Flex>
                <Button
                    position="fixed"
                    bottom="20px"
                    right="20px"
                    colorScheme="teal"
                    borderRadius="full"
                    size="lg"
                    onClick={() => alert('Agregar cita')}
                >
                    Agregar cita
                </Button>
                <Button
                    position="fixed"
                    bottom="20px"
                    left="20px"
                    colorScheme="blue"
                    borderRadius="full"
                    size="lg"
                    onClick={() => navigate("/lista")}
                >
                    Regresar
                </Button>
            </Box>
        )
    )
}

export default DetalleDepartamento