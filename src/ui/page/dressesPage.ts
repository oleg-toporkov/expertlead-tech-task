import {Page} from "playwright";
import {ElementHandle} from "playwright/types/types";

export class DressesPage {

    private readonly page: Page;

    private readonly checkedCheckboxLocator: string = 'xpath=//span[@data-children-count and @class="checked"]';
    private readonly productGridViewLocator: string = 'css=[class="product_list grid row"]';
    private readonly productListViewLocator: string = 'css=[class="product_list list row"]';
    private readonly listViewButtonLocator: string = 'css=[id=list]';
    private readonly dressPriceLocator: string = 'css=[class="price product-price"]';
    private readonly summerDressesFilterLocator: string = 'css=[id="layered_category_11"]';
    private readonly spinnerLocator: string = 'xpath=//img[contains(@img, "loader")]';
    private readonly dressNameLocator: string = 'css=[class="product-name"]';


    constructor(page: Page) {
        this.page = page;
    }

    public async getSelectedCheckboxesCount(): Promise<number> {
        return this.page.$$eval(this.checkedCheckboxLocator, elements => elements.length)
    }

    public async waitProductGridToBeLoaded(): Promise<ElementHandle<HTMLOrSVGElement>> {
        return this.page.waitForSelector(this.productGridViewLocator);
    }

    public async waitProductListToBeLoaded(): Promise<ElementHandle<HTMLOrSVGElement>> {
        return this.page.waitForSelector(this.productListViewLocator);
    }

    public async clickListView(): Promise<void> {
        return this.page.click(this.listViewButtonLocator);
    }

    public async getAllPrices(): Promise<Array<string>> {
        return this.page.$$eval(this.dressPriceLocator, elements => elements.map(element => element.textContent.trim()));
    }

    public async clickFilterBySummerDresses(): Promise<void> {
        return this.page.click(this.summerDressesFilterLocator);
    }

    public async waitForSpinnerToDisappear(): Promise<ElementHandle<HTMLOrSVGElement>> {
        return this.page.waitForSelector(this.spinnerLocator, {state: 'detached'});
    }

    public async getAllDressNames(): Promise<Array<string>> {
        return this.page.$$eval(this.dressNameLocator, elements => elements.map(element => element.textContent));
    }

}