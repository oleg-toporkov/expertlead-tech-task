export interface IConfig {
    api: IApi;
}

export interface IApi {
    reqres: IReqRes;
}

export interface IReqRes {
    host: string;
    user: IUser;
}

export interface IUser {
    email: string;
    password: string;
}