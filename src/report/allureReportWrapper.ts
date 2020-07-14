import {
    AllureInterface,
    ContentType,
} from 'allure2-js-commons';

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