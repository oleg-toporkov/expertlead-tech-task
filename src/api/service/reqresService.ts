import {config} from "../../config/config";
import * as request from "supertest";
import {ReqresEndpoints} from "../constants/reqresEndpoints";
import {LoginRequestDTO} from "../dto/loginRequestDTO";
import {LoginResponseDTO} from "../dto/loginResponseDTO";
import {expect} from "chai";

export class ReqresService {

    private static readonly HOST = config.api.reqres.host;


    static async postLogin(loginRequestDTO: LoginRequestDTO): Promise<request.Response> {
        return request(this.HOST)
            .post(ReqresEndpoints.POST_LOGIN)
            .send(loginRequestDTO)
            .on('response', (response) => {
                console.log(`Received response for login:\n${JSON.stringify(response, null, '\t')}`);
            });
    }

    static async loginAs(email: string, password: string): Promise<LoginResponseDTO> {
        const loginRequestDTO = new LoginRequestDTO(email, password);
        const response = await this.postLogin(loginRequestDTO);
        expect(response.status).to.be.equal(200);
        // expect(response.status).to.be.at.most(380).and.at.least(200); TODO according to the task it should be so, but not the best idea. would prefer checking strictly according to RFC
        return response.body as LoginResponseDTO;
    }

}