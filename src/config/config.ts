import {IConfig} from "./types";

export const config: IConfig = {
    api: {
        reqres: {
            host: process.env['REQRES_HOST'],
            user: {
                email: process.env['DEFAULT_API_USER_EMAIL'],
                password: process.env['DEFAULT_API_USER_PASSWORD']
            }
        }
    },
    ui: {
        url: process.env['FRONTEND_URL'],
        browser: process.env['DEFAULT_BROWSER']
    }
}