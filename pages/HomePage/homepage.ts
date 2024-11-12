class   HomePage{


  constructor(page)
{

 this.page=page;
 this.pageheader="//h6[normalize-space()='My Tasks']";
 this.logoutdropdown="#header-profile-drop-down-button";
 this.logoutbutton="//button[text()='Log Out']";

}

 async logoutfromhomepage()
{

   await this.page.click(this.logoutdropdown);
   await this.page.click(this.logoutbutton);

}


}

module.exports= HomePage