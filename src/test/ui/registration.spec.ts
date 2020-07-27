import * as playwright from 'playwright';
import * as faker from 'faker';
import {config} from "../../config/config";
import {AuthenticationPage} from "../../ui/page/authenticationPage";
import {CreateAnAccountPage} from "../../ui/page/createAnAccountPage";
import {MainPage} from "../../ui/page/mainPage";
import {MyAccountPage} from "../../ui/page/myAccountPage";
import {getRandomInt} from "../../util/random";
import {expect} from "chai";
import {Browser, Page} from "playwright";
import {DressesPage} from "../../ui/page/dressesPage";

describe('Automationpractice web site', () => {

    const email = `oleg+${getRandomInt()}@toporkov.com`;

    let authenticationPage: AuthenticationPage;
    let createAnAccountPage: CreateAnAccountPage;
    let mainPage: MainPage;
    let myAccountPage: MyAccountPage;
    let dressesPage: DressesPage;

    let page: Page;
    let browser: Browser;

    before(async () => {
        // TODO something might be reusable, move to common place
        browser = await playwright[config.ui.browser].launch();
        const context = await browser.newContext();
        page = await context.newPage();

        authenticationPage = new AuthenticationPage(page);
        createAnAccountPage = new CreateAnAccountPage(page);
        mainPage = new MainPage(page);
        myAccountPage = new MyAccountPage(page);
        dressesPage = new DressesPage(page);
    });

    beforeEach(async () => {
        await page.goto(config.ui.url);
    });


    it('should register new user', async () => {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();

        await mainPage.header.clickSignInButton();

        await authenticationPage.typeEmailAddress(email);
        await authenticationPage.clickCreateAnAccount();

        await createAnAccountPage.selectMrs();
        await createAnAccountPage.typeFirstName(firstName);
        await createAnAccountPage.typeLastName(lastName);
        await createAnAccountPage.typePassword(getRandomInt().toString());
        await createAnAccountPage.typeAddressFirstName(firstName);
        await createAnAccountPage.typeAddressLastName(lastName);
        await createAnAccountPage.typeAddress(faker.address.streetAddress());
        await createAnAccountPage.typeCity(faker.address.city());
        await createAnAccountPage.selectState(faker.address.state());
        await createAnAccountPage.typePostCode(faker.address.zipCode('#####'));
        await createAnAccountPage.typeMobilePhoneNumber(faker.phone.phoneNumber('+1 ###-###-####'));
        await createAnAccountPage.clickRegister();

        await myAccountPage.waitForPageToBeLoaded();

        const header = await myAccountPage.getPageHeader();
        expect(header, 'User is not navigated to the "My Account" page').to.be.equal('My account');

        const userName = await myAccountPage.header.getAccountName();
        expect(userName, 'User is not logged in correctly').to.be.equal(`${firstName} ${lastName}`);
    });

    it('should open home page by clicking logo', async () => {
        // TODO might be a good idea to use specific user for that to be tests independent
        await mainPage.navigation.clickLogo();

        await mainPage.waitForContentToBeLoaded();
        const menus = await mainPage.navigation.getAllMenusText();
        expect(menus, 'Menu titles are incorrect').to.be.deep.equal(['Women', 'Dresses', 'T-shirts']);

        const popularTabState = await mainPage.getPopularTabState();
        expect(popularTabState, 'Popular tab is not active').to.be.equal('active');
    });

    it('should open dresses page', async () => {
        await mainPage.navigation.clickDressesMenu();
        
        await dressesPage.waitProductGridToBeLoaded();

        const selectedCheckboxesCount = await dressesPage.getSelectedCheckboxesCount();
        expect(selectedCheckboxesCount, 'Some of the checkboxes are selected').to.be.equal(0);
    });

    it('should open dresses in list view', async () => {
        await mainPage.navigation.clickDressesMenu();

        await dressesPage.clickListView();
        await dressesPage.waitProductListToBeLoaded();

        const prices = await dressesPage.getAllPrices();
        expect(prices, 'Prices list is empty').to.be.an('array').that.is.not.empty;
        expect(prices.length, 'Prices list has incorrect size').to.be.equal(5); // TODO might be data depending

        for (let price of prices) {
            expect(price, 'Price is incorrect').to.be.a('string').that.is.not.empty;
        }
    });

    it('should filter dresses', async () => {
        await mainPage.navigation.clickDressesMenu();

        await dressesPage.clickFilterBySummerDresses();
        await dressesPage.waitForSpinnerToDisappear();

        const dressNames = await dressesPage.getAllDressNames();
        expect(dressNames, 'Summer dresses list is empty').to.be.an('array').that.is.not.empty;

        for (let name of dressNames) {
            expect(name, 'Dress name is incorrect').to.contain('Summer');
        }
    });


    after(async () => {
        await page.close();
        await browser.close();
    });

})