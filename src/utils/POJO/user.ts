export interface UserObject {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}


export interface UserEntity {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}


export interface ResponseUser {
  isOk: boolean,
  message: string,
  data?: UserEntity
}
