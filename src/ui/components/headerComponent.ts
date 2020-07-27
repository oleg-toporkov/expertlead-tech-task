import {Page} from "playwright";

export class HeaderComponent {
    private readonly page: Page;

    private readonly signInButtonLocator: string = 'css=.login';
    private readonly accountNameLocator: string = 'css=[class="account"]';

    constructor(page: Page) {
        this.page = page;
    }

    public async clickSignInButton(): Promise<void> {
        return this.page.click(this.signInButtonLocator);
    }

    public async getAccountName(): Promise<string> {
        return this.page.textContent(this.accountNameLocator);
    }
}