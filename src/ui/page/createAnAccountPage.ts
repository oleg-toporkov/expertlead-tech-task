import {Page} from "playwright";
import {HeaderComponent} from "../components/headerComponent";

export class CreateAnAccountPage {
    private readonly page: Page;

    public readonly header: HeaderComponent;

    private readonly mrTitleRadioButtonLocator: string = 'css=[id="uniform-id_gender1"]';
    private readonly mrsTitleRadioButtonLocator: string = 'css=[id="uniform-id_gender2"]';
    private readonly firstNameInputFieldLocator: string = 'css=[id="customer_firstname"]';
    private readonly lastNameInputFieldLocator: string = 'css=[id="customer_lastname"]';
    private readonly passwordInputFieldLocator: string = 'css=[id="passwd"]';
    private readonly firstNameAddressInputFieldLocator: string = 'css=[id="firstname"]';
    private readonly lastNameAddressInputFieldLocator: string = 'css=[id="lastname"]';
    private readonly addressInputFieldLocator: string = 'css=[id="address1"]';
    private readonly cityInputFieldLocator: string = 'css=[id="city"]';
    private readonly stateSelectorLocator: string = 'css=[id="id_state"]';
    private readonly postCodeInputFieldLocator: string = 'css=[id="postcode"]';
    private readonly mobilePhoneInputFieldLocator: string = 'css=[id="phone_mobile"]';
    private readonly registerButtonLocator: string = 'css=[id="submitAccount"]';

    constructor(page: Page) {
        this.page = page;
        this.header = new HeaderComponent(this.page);
    }

    public async selectMr(): Promise<void> {
        return this.page.click(this.mrTitleRadioButtonLocator);
    }

    public async selectMrs(): Promise<void> {
        return this.page.click(this.mrsTitleRadioButtonLocator);
    }

    public async typeFirstName(text: string): Promise<void> {
        return this.page.type(this.firstNameInputFieldLocator, text);
    }

    public async typeLastName(text: string): Promise<void> {
        return this.page.type(this.lastNameInputFieldLocator, text);
    }

    public async typePassword(text: string): Promise<void> {
        return this.page.type(this.passwordInputFieldLocator, text);
    }

    public async typeAddressFirstName(text: string): Promise<void> {
        return this.page.type(this.firstNameAddressInputFieldLocator, text);
    }

    public async typeAddressLastName(text: string): Promise<void> {
        return this.page.type(this.lastNameAddressInputFieldLocator, text);
    }

    public async typeAddress(text: string): Promise<void> {
        return this.page.type(this.addressInputFieldLocator, text);
    }

    public async typeCity(text: string): Promise<void> {
        return this.page.type(this.cityInputFieldLocator, text);
    }

    public async selectState(option: string): Promise<Array<string>> {
        return this.page.selectOption(this.stateSelectorLocator, {label: option});
    }

    public async typePostCode(text: string): Promise<void> {
        return this.page.type(this.postCodeInputFieldLocator, text);
    }

    public async typeMobilePhoneNumber(text: string): Promise<void> {
        return this.page.type(this.mobilePhoneInputFieldLocator, text);
    }

    public async clickRegister(): Promise<void> {
        return this.page.click(this.registerButtonLocator);
    }

}