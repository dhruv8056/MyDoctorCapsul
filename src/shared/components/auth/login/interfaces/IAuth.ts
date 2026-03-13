import { BaseEntityDetail } from '@shared/types/app.type';

export interface ILogin {
  email: string;
  password: string;
}

export interface IUser {
  payload: {
    id: string;
  };
}
export interface IRole extends BaseEntityDetail {
  name: string;
  desc: string;
}

export interface ILoginState {
  data: ILogin | null;
  loading: boolean;
  error: string | null;
}

export interface IUserPermission {
  id: string;
  moduleName: string;
  accountId: string;
}

export interface LoginViewProps {
  handleSubmit: (values: ILogin) => Promise<void>;
}
