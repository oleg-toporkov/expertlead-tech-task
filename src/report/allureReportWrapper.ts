import {
    AllureInterface,
    ContentType,
} from 'allure2-js-commons';
import {Page} from "playwright";

require('mocha-allure2-reporter');
declare let allure: AllureInterface;

// Try/catch needed to run without any issues directly in WebStorm, as plugin not getting loaded

export function attachJson(name: string, content: object) {
    const prettyJson = JSON.stringify(content, null, '\t');
    console.log(prettyJson);

    try {
        allure.attachment(name, prettyJson, ContentType.JSON);
    } catch (e) {
        console.warn(`Cannot attach JSON: ${e.message}`);
    }
}

export function feature(name: string): void {
    try {
        allure.feature(name);
    } catch (e) {
        console.warn(`Cannot add feature label: ${e.message}`);
    }
}

export function story(name: string): void {
    try {
        allure.story(name);
    } catch (e) {
        console.warn(`Cannot add story label: ${e.message}`);
    }
}

export async function step(name: string, screenshot: Promise<Buffer>) {
    console.log(name);

    try {
        allure.attachment(name, await screenshot, ContentType.PNG);
    } catch (e) {
        console.warn(`Cannot attach screenshot: ${e.message}`);
    }
}