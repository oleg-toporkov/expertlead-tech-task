import {Page} from "playwright";
import {HeaderComponent} from "../components/headerComponent";
import {step} from "../../report/allureReportWrapper";
import {getScreenshot} from "../helpers";

export class AuthenticationPage {
    private readonly page: Page;

    public readonly header: HeaderComponent;

    private readonly emailAddressInputFieldLocator: string = 'css=[id="email_create"]';
    private readonly createAnAccountButtonLocator: string = 'css=[id="SubmitCreate"]';

    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderComponent(this.page);
    }

    public async clickCreateAnAccount(): Promise<void> {
        await step('Click create account', getScreenshot(this.page));
        return this.page.click(this.createAnAccountButtonLocator);
    }

    public async typeEmailAddress(email: string): Promise<void> {
        await step('Type email address', getScreenshot(this.page));
        return this.page.fill(this.emailAddressInputFieldLocator, email);
    }
}