import {Page} from "playwright";
import {step} from "../../report/allureReportWrapper";
import {getScreenshot} from "../helpers";

export class HeaderComponent {
    private readonly page: Page;

    private readonly signInButtonLocator: string = 'css=.login';
    private readonly accountNameLocator: string = 'css=[class="account"]';

    constructor(page: Page) {
        this.page = page;
    }

    public async clickSignInButton(): Promise<void> {
        await step('Click sign in', getScreenshot(this.page));
        return this.page.click(this.signInButtonLocator);
    }

    public async getAccountName(): Promise<string> {
        await step('Get account name', getScreenshot(this.page));
        return this.page.textContent(this.accountNameLocator);
    }
}