import { Models } from "appwrite";

export interface Departamentos extends Models.Document{
    propietario:string,
    torre:number,
    piso:number,
    cuartos:number,
    banios:number,
    fotoId:string,
    departamento:number
}