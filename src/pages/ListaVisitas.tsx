import { useEffect, useState } from "react"
import Navbar from "../shared/components/Navbar"
import {Visitas } from "../shared/declaraciones/database"
import { database} from "../lib/appwrite"
import { Appwrite } from "../lib/env"
import { Grid, GridItem } from "@chakra-ui/react"
import Visita from "../shared/components/Visita"
import { useNavigate } from "react-router-dom"

const ListaVisitas = () => {
  const [visitas,setVisitas]=useState<Array<Visitas>>()
  const navigate=useNavigate()
  const listaVisitas=async()=>{
    const {documents}=await database.listDocuments(Appwrite.databaseId,Appwrite.collections.visitas)
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
        <Navbar/>
        <Grid templateColumns='repeat(3, 1fr)' gap={6} p={10}>
          {visitas?.map((visita) => ( 
            <GridItem key={visita.$id} onClick={()=>detallevisita(visita.$id)}>
              <Visita visitas={visita} />
            </GridItem>
          ))}
        </Grid>
      </>
    </div>
  )
}

export default ListaVisitas
