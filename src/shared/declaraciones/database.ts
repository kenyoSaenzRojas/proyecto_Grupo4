import { Models } from "appwrite";

export interface Visitas extends Models.Document{
    dDNI:number,
    Visitante:string,
    Comentario:string,
    Propietario:string,
    Departamento:number,
    Fecha_ing:string,
    Hora_ing:string,
    Fecha_fin:string,
    Estado:string,
    Id_Departamento:string
}
