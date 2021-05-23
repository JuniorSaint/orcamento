import { InterfacePadrao } from "src/app/shared/interface-padrao";



export interface IUser extends InterfacePadrao{

  _id?: string,
  name: string,
  email: string,
  password: string,
  repPassword : string,
  active: boolean,
  userKind: string,
  token?: string;
}
