import React, { useState } from 'react';
import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // lonk del proyecto
    .setProject('<PROJECT_ID>'); //ID DEL PROYECTO

const databases = new Databases(client);

const AgendarVisita = () => {
  const [error, setError] = useState<string | null>(null); // Manejo de errores
  const [success, setSuccess] = useState<string | null>(null); // Mensaje de éxito

  const crearVisita = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita que se recargue la página
    setError(null);
    setSuccess(null);

    const { Visitante, Comentario, DNI, FechaIngreso } = e.target as typeof e.target & {
      Visitante: { value: string };
      Comentario: { value: string };
      DNI: { value: string };
      FechaIngreso: { value: string };
    };  // Obtiene los valores de los campos de la visita

    // Validación de campos
    if (!Visitante.value || !Comentario.value || !DNI.value || !FechaIngreso.value) {
      setError('Todos los campos son obligatorios');
      return;
    }

    // DNI a Numero y Fecha a Date
    const dniNumber = parseInt(DNI.value, 10);
    const fechaIngresoDate = new Date(FechaIngreso.value);

    if (isNaN(dniNumber)) {
      setError('DNI debe ser un número válido'); // Validación de DNI, aunque no se si es necesario, lo puedes eliminar sino
      return;
    }

    try {
        const promise = await databases.createDocument(
          'your_database_id', // Reemplaza con tu ID de base de datos
          'your_collection_id', // Reemplaza con tu ID de colección
          ID.unique(),
          {
            Visitante: Visitante.value,
            Comentario: Comentario.value,
            DNI: dniNumber,
            FechaIngreso: fechaIngresoDate,
          }
        );  // Con esto ya deberia crearce la visita
      
        setSuccess('Visita creada exitosamente');
        console.log('Document created:', promise);
      } catch (error) {
        setError('Error al crear la visita');
        console.error('Error creating document:', error);
      }
  };

  return (  // ESTA PARTE HABRIA QUE DECORRARLA CON CHAKRA UI XFA ayuda en esto, ns como es el diseño final
    <div>
      <h1>Crear Visita</h1>
      <form onSubmit={crearVisita}>
        <div>
          <label htmlFor="Visitante">Visitante:</label>
          <input type="text" id="Visitante" name="Visitante" />
        </div>
        <div>
          <label htmlFor="Comentario">Comentario:</label>
          <input type="text" id="Comentario" name="Comentario" />
        </div>
        <div>
          <label htmlFor="DNI">DNI:</label>
          <input type="text" id="DNI" name="DNI" />
        </div>
        <div>
          <label htmlFor="FechaIngreso">Fecha de Ingreso:</label>
          <input type="date" id="FechaIngreso" name="FechaIngreso" />
        </div>
        <button type="submit">Crear Visita</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}    // Esto del color tambien se puede ir
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default AgendarVisita;