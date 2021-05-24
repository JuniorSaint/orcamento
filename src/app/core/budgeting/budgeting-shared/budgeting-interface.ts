import { InterfacePadrao } from 'src/app/shared/interface-padrao';

export interface IBudgeting extends InterfacePadrao{

    _id: string;
    _idClient: string;
    dateEnter: Date;
    DateDelivery: Date;
    service: IService[] 
    valueTotal: number;
    valueISS: number;
    situation: string;
    note: string;
}

export interface IService{
    typeService: string,
    valueUnit: number,
    amount: number,
    valueAmount: number

  };