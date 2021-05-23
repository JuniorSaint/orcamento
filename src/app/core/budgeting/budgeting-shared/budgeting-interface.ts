export interface IBudgeting{

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
    tipoServico: string,
    descricao: string,
    valorUnitario: number,
  };