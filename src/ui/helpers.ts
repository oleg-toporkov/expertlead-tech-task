import {Page} from "playwright";
import {getUuid} from "../util/random";

export function getScreenshot(page: Page): Promise<Buffer> {
    return page.screenshot({fullPage: true, path: `target/${getUuid()}.png`});
}