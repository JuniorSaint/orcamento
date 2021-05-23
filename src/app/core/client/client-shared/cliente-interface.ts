import { InterfacePadrao } from "src/app/shared/interface-padrao";

export interface IClient extends InterfacePadrao {




    _id?: string;
    name: string;
    cpf: number;
    email: string;
    phone: Phone[],
    address: {
        street: string,
        district: string,
        complement: string,
        city: string,
        UF: string,
        zipCode: number,
    },
    note: string;
}


export interface Phone{ 
  _id?: string,
  phoneType: string, 
  phoneNumber: number, 
  social: string }
