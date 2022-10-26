package Pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Loginpage {
	
	public WebDriver driver;
@FindBy(xpath="//input[@id='Email']")
WebElement username;
@FindBy(xpath="//input[@class='password']")
WebElement password;
@FindBy(xpath="//button[@class='button-1 login-button']")
WebElement loginbutton;
@FindBy(xpath="//a[text()='Logout']")
WebElement logoutbutton;

public void setusername(String uname)
{
username.clear();
username.sendKeys(uname);
}
public void setpassword(String pword)
{
	password.clear();
	password.sendKeys(pword);
}
public void clicklogin()
{
	loginbutton.click();
}
public void clicklogout()
{
	logoutbutton.click();
}
public Loginpage(WebDriver ldriver)
{
	driver=ldriver;
	PageFactory.initElements(ldriver, this);
}
}
