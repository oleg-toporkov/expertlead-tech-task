import {Page} from "playwright";
import {HeaderComponent} from "../components/headerComponent";
import {NavigationComponent} from "../components/navigationComponent";
import {ElementHandle} from "playwright/types/types";

export class MainPage {
    private readonly page: Page;

    public readonly header: HeaderComponent;
    public readonly navigation: NavigationComponent;

    private readonly contentContainerLocator: string = 'css=[class=columns-container]';
    private readonly popularTabLocator: string = 'xpath=//a[@class="homefeatured"]//..';


    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderComponent(this.page);
        this.navigation = new NavigationComponent(this.page);
    }

    public async waitForContentToBeLoaded(): Promise<ElementHandle<HTMLOrSVGElement>> {
        return this.page.waitForSelector(this.contentContainerLocator);
    }

    public async getPopularTabState(): Promise<string> {
        return this.page.getAttribute(this.popularTabLocator, 'class');
    }
}