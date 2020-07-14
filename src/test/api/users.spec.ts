import {getRandomInt} from "../../util/random";
import {ReqresService} from "../../api/service/reqresService";
import {expect} from "chai";
import * as moment from "moment";
import {feature, story} from "../../report/allureReportWrapper";

describe('Reqres service', () => {

    beforeEach(() => {
        feature('Users');
    });

    it('should create user', async () => {
        story('As a user I want to create a new user');

        const userName = `Oleg Toporkov ${getRandomInt()}`;
        const job = 'QA Automation Engineer';

        const createdBefore = moment();

        const createUserResponseDTO = await ReqresService.createUser(userName, job);
        console.log(`Created user id is: ${createUserResponseDTO.id}`);

        const createdAfter = moment();

        expect(createUserResponseDTO.id, 'Created user id is incorrect').to.be.a('string').that.is.not.empty;
        expect(createUserResponseDTO.job, 'Created user job is incorrect').to.be.equal(job);
        expect(createUserResponseDTO.name, 'Created user name is incorrect').to.be.equal(userName);

        const actualCreatedDate = new Date(createUserResponseDTO.createdAt);
        expect(actualCreatedDate, 'User creation date is too late').to.be.at.least(createdBefore.toDate());
        expect(actualCreatedDate, 'User creation date is too early').to.be.at.most(createdAfter.toDate());
    });

    it('should return user by id', async () => {
        story('As a user I want to get user details');

        const userId = 3; // TODO better move to config or create before test
        const emailDomain = '@reqres.in';

        const userResponseDTO = await ReqresService.getUser(userId);
        expect(userResponseDTO.data.email, 'User name is incorrect').to.be.a('string').and.satisfy(
            (email: string) => email.endsWith(emailDomain));
    });

});