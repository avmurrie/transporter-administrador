export interface Empresa{
    politica?:string;
}

export interface Servicio{
    nameTypeService?:string;
    descriptionTypeService?:string;
}

export interface Tarifa{
    nombre?:string;
    servicio?:string;
    minKM?:string;
    maxKM?:string;
    precio?:string;
}