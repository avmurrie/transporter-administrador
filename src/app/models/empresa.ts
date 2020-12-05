export interface Empresa{
    politica?:string;
}

export interface Servicio{
    nameTypeService?:string;
    descriptionTypeService?:string;
}

export interface Tarifa{
    nameFare?:string;
    nameService?:string;
    idTypeServiceFare?:string;
    minFare?:string;
    maxFare?:string;
    priceFare?:string;
    idCompanyFare?:string
}