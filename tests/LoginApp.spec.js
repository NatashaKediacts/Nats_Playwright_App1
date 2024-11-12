import { expect, test } from '@playwright/test';
import { logincredentials } from '../utils/logindata';
import loginPage from '../pages/LoginPage/loginpage';
import homepage from '../pages/HomePage/homepage';

test('Login Test to application', async ({ page })=>{

    const loginapp = new loginPage(page);
    await loginapp.login(logincredentials.username,logincredentials.password,logincredentials.URL);
    await loginapp.verifyhomepageurl(logincredentials.HOMEPageURL);
    const homepageapp = new homepage(page);
    await homepageapp.logoutfromhomepage(page);
  











//await this.page.pause();
// await page.fill('#InputEmail1', 'AutoPartUser_2024_08_13_18_08_17@ddi.com');
// await page.fill('#InputPassword1', 'Ddiworld123!@#');
// await page.click('#logon-button');
// await expect(page).toHaveURL('https://qa-pinpoint.ddiworld.com/psg2/home');
// const myTasksHeader = page.locator('//h6[normalize-space()="My Tasks"]');
// await myTasksHeader.waitFor({timeout: 10000});

});