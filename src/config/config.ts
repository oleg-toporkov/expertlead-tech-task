import {IConfig} from "./types";

export const config: IConfig = {
    api: {
        reqres: {
            host: process.env['REQRES_HOST'],
            user: {
                email: process.env['DEFAULT_USER_EMAIL'],
                password: process.env['DEFAULT_USER_PASSWORD']
            }
        }
    }
}