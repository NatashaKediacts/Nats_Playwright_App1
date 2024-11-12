import { expect } from '@playwright/test';

class LoginPage{


constructor(page)
{

    this.page = page;
    this.username = '#InputEmail1';
    this.password = '#InputPassword1';
    this.loginButton = '#logon-button';
    //this.url = 'https://qa-pinpoint.ddiworld.com/psg2';


}


async login(username:string, password:string, URL:string)
{
    await this.page.goto(URL);
    await this.page.fill(this.username, username);
    await this.page.fill(this.password, password);
    await this.page.click(this.loginButton);


}

async verifyhomepageurl(URL:string)
{
  await expect(this.page).toHaveURL(URL);

    }

}

module.exports = LoginPage;