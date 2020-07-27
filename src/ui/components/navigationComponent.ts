import {Page} from "playwright";

export class NavigationComponent {

    private readonly page: Page;

    private readonly logoLocator: string = 'css=[class="logo img-responsive"]';
    private readonly menuLocator: string = 'xpath=//div[@id="block_top_menu"]/ul/li/a';
    private readonly dressesMenuLocator: string = 'xpath=//div[@id="block_top_menu"]//a[@title="Dresses"]';

    constructor(page: Page) {
        this.page = page;
    }

    public async clickLogo(): Promise<void> {
        return this.page.click(this.logoLocator);
    }

    public async getAllMenusText(): Promise<Array<string>> {
        return this.page.$$eval(this.menuLocator, elements => elements.map(element => element.textContent));
    }

    public async clickDressesMenu(): Promise<void> {
        return this.page.click(this.dressesMenuLocator);
    }

}