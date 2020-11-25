export interface Empresa{
    politica?:string;
}

export interface Servicio{
    nombre?:string;
    descripcion?:string;
}

export interface Tarifa{
    nombre?:string;
    servicio?:string;
    minKM?:string;
    maxKM?:string;
    precio?:string;
}