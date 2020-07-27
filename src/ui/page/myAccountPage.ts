import {Page} from "playwright";
import {HeaderComponent} from "../components/headerComponent";
import {ElementHandle} from "playwright/types/types";
import {step} from "../../report/allureReportWrapper";
import {getScreenshot} from "../helpers";

export class MyAccountPage {
    private readonly page: Page;

    public readonly header: HeaderComponent;

    private readonly pageHeadingLocator: string = 'css=[class="page-heading"]';
    private readonly myAccountNavigationLocator: string = 'xpath=//span[@class="navigation_page" and text()="My account"]';

    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderComponent(this.page);
    }

    public async getPageHeader(): Promise<string> {
        await step('Get page header', getScreenshot(this.page));
        return this.page.textContent(this.pageHeadingLocator);
    }

    public async waitForPageToBeLoaded(): Promise<ElementHandle<HTMLOrSVGElement>> {
        return this.page.waitForSelector(this.myAccountNavigationLocator);
    }

}