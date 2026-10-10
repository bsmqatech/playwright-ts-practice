import {test, Page} from "@playwright/test";

test("Navigate To Google", async ({page})=>{

    await page.goto("https://www.google.com/");
    



})