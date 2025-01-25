import React, { useState } from 'react';
import { database, ID } from '../shared/lib/appwrite';
import { Appwrite } from '../shared/lib/env';
import { Box, Button, FormControl, FormLabel, Grid, GridItem, Heading, Input, Stack, Textarea, useToast } from '@chakra-ui/react';

const Citas = () => {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const toast = useToast();

  const crearVisita = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const formData = new FormData(e.currentTarget);
    const Visitante = formData.get('Visitante') as string;
    const Comentario = formData.get('Comentario') as string;
    const DNI = formData.get('DNI') as string;
    const FechaIngreso = formData.get('Fecha_ing') as string;
    const HoraIngreso = formData.get('Hora_ing') as string;

    if (!Visitante || !Comentario || !DNI || !FechaIngreso) {
      setError('Todos los campos son obligatorios');
      return;
    }

    const dniNumber = parseInt(DNI, 10);
    const fechaIngresoDate = new Date(FechaIngreso);

    if (isNaN(dniNumber)) {
      setError('DNI debe ser un número válido');
      return;
    }

    try {
      const promise = await database.createDocument(
        Appwrite.databaseId,
        Appwrite.collections.visitas,
        ID.unique(),
        {
          Visitante,
          Comentario,
          DNI: dniNumber,
          Fecha_ing: fechaIngresoDate,
          Hora_ing: HoraIngreso,
          Propietario: 'Donatto',
          Departamento: 301,
          Id_Departamento: '6782f6d600241d8b32a9',
        }
      );

      setSuccess('Visita creada exitosamente');
      toast({
        title: 'Visita creada exitosamente',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      console.log('Document created:', promise);
    } catch (error) {
      setError('Error al crear la visita');
      toast({
        title: 'Error al crear la visita',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      console.error('Error creating document:', error);
    }
  };

  return (
    <Box p={10}>
      <Heading textAlign='center' paddingBottom='20px'>Crear Visita</Heading>
      <Grid templateColumns='repeat(1, 1fr)' gap={6}>
        <GridItem w='100%' h='auto' p={4} border='1px solid blue'>
          <form onSubmit={crearVisita}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel htmlFor="Visitante">Visitante</FormLabel>
                <Input type="text" id="Visitante" name="Visitante" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="DNI">DNI</FormLabel>
                <Input type="text" id="DNI" name="DNI" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="Comentario">Comentario</FormLabel>
                <Textarea id="Comentario" name="Comentario" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="Fecha_ing">Fecha de Ingreso</FormLabel>
                <Input type="date" id="Fecha_ing" name="Fecha_ing" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="Hora_ing">Hora de Ingreso</FormLabel>
                <Input type="time" id="Hora_ing" name="Hora_ing" />
              </FormControl>
              <Button type="submit" colorScheme="teal" size="md">Crear Visita</Button>
            </Stack>
          </form>
          {error && <Box color='red' mt={4}>{error}</Box>}
          {success && <Box color='green' mt={4}>{success}</Box>}
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Citas;
