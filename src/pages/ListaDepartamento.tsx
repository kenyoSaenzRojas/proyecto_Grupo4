import { useEffect, useState } from "react"
import Departamento from "../shared/components/Departamento"
import Navbar from "../shared/components/Navbar"
import { Departamentos } from "../shared/declaraciones/database"
import { database} from "../lib/appwrite"
import { Appwrite } from "../lib/env"
import { Button, Grid, GridItem, useDisclosure } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const ListaDepartamento = () => {
  const [depas,setDepas]=useState<Array<Departamentos>>()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()
  const listaDepas=async()=>{
    const {documents}=await database.listDocuments(Appwrite.databaseId,Appwrite.collections.departamentos)
    setDepas(documents)
  }
  useEffect(()=>{
      listaDepas()
  },[])
  return (
    <div>
      <>
        <Navbar/>
        <Button colorScheme="teal" onClick={onOpen} mb={4}>
        Agregar Departamento
        </Button>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {depas?.map((depa) => (
            <GridItem key={depa.departamento}>
              <Departamento depas={depa} onClick={() => navigate(`/departamento/${depa.departamento}`)} />
            </GridItem>
          ))}
        </Grid>
      </>
    </div>
  )
}

export default ListaDepartamento
