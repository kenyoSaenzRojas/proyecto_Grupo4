import { useEffect, useState } from "react"
import { Card, CardBody, Grid, GridItem, Heading} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { Query } from "appwrite"
import { Appwrite } from "../shared/lib/env"
import { database } from "../shared/lib/appwrite"
import { Visitas } from "../shared/declaraciones/database"
import Visita from "../shared/components/Visita"
import NavBarUser from "../shared/components/NavBarUser"

const ListaVisitas = () => {
  const [visitas,setVisitas]=useState<Array<Visitas>>()
  const navigate=useNavigate()

  const listaVisitas=async()=>{
    const {documents}=await database.listDocuments(Appwrite.databaseId,Appwrite.collections.visitas,
      [Query.equal('Estado',1)]
    )
    setVisitas(documents)
  }
  const detallevisita=(id:string)=>{
    navigate(`/lista/${id}`)
  }
  useEffect(()=>{
      listaVisitas()
  },[])
  return (
    <div>
      <>
        <NavBarUser/>
        <Grid templateColumns='repeat(3, 1fr)' gap={6} p={10}>
          {visitas?.length === 0 ? (
            <>
            <GridItem>
              <Card maxW='sm' bg='rgba(0, 0, 0, 0.2)' borderRadius='lg' boxShadow='md'>
                <CardBody>
                  <Heading size='lg' fontWeight='bold' textAlign='center' textColor='red'>No hay visitas disponibles en este momento.</Heading>
              </CardBody>
              </Card>
            </GridItem>
            <GridItem>
              <Card maxW='sm' bg='rgba(0, 0, 0, 0.2)' borderRadius='lg' boxShadow='md'>
                <CardBody>
                  <Heading size='lg' fontWeight='bold' textAlign='center' textColor='red'>No hay visitas disponibles en este momento.</Heading>
              </CardBody>
              </Card>
            </GridItem>
            <GridItem>
              <Card maxW='sm' bg='rgba(0, 0, 0, 0.2)' borderRadius='lg' boxShadow='md'>
                <CardBody>
                  <Heading size='lg' fontWeight='bold' textAlign='center' textColor='red'>No hay visitas disponibles en este momento.</Heading>
                </CardBody>
              </Card>
            </GridItem>
            </>
          ) : (
          visitas?.map((visita) => ( 
            <GridItem key={visita.$id} onClick={()=>detallevisita(visita.$id)}>
              <Visita visitas={visita} onVisitaFinalizada={listaVisitas} />
            </GridItem>
          ))
        )}
        </Grid>
      </>
    </div>
  )
}

export default ListaVisitas
