export interface IConfig {
    api: IApi;
    ui: IUi;
}

export interface IApi {
    reqres: IReqRes;
}

export interface IUi {
    url: string;
    browser: string
}

export interface IReqRes {
    host: string;
    user: IUser;
}

export interface IUser {
    email: string;
    password: string;
}