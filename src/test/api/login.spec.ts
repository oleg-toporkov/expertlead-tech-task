import {ReqresService} from "../../api/service/reqresService";
import {config} from "../../config/config";
import {expect} from "chai";
import {LoginRequestDTO} from "../../api/dto/login/loginRequestDTO";

describe('Reqres service', () => {

    it('should login user and return token', async () => {
        const responseDTO = await ReqresService.loginAs(config.api.reqres.user.email, config.api.reqres.user.password);

        console.log(`Token is: ${responseDTO.token}`);
        expect(responseDTO.token, 'Token is incorrect').to.be.a('string').that.is.not.empty;
    });

    /**
     * Just showing how to test response more flexible if needed
     */
    it('should not login with non-existing user email', async () => {
        const wrongUserEmail = 'wrong_user_email@reqres.in';

        const loginRequestDTO = new LoginRequestDTO(wrongUserEmail, config.api.reqres.user.password);
        const response = await ReqresService.postLogin(loginRequestDTO);

        expect(response.status, 'Login response code is incorrect').to.be.equal(400);
        expect(response.text, 'Login response body is incorrect').to.contain('user not found');
    });

});