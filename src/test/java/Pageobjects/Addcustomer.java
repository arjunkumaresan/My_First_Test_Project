package Pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class Addcustomer {
public WebDriver ldriver;

public Addcustomer(WebDriver rdriver)
{
	ldriver=rdriver;
	PageFactory.initElements(ldriver, this);
}

By cutomer_menu=By.xpath("//a[@href='#']//i[contains(@class,'nav-icon far fa-user')]");
By customers_menu=By.xpath("//a[@href='/Admin/Customer/List']//i[contains(@class,'nav-icon far fa-dot-circle')]");
By add_btn=By.xpath("//a[@href='/Admin/Customer/Create']");
 By mail=By.xpath("//input[@id='Email']");
 By Password=By.xpath("//input[@id='Password']");
 By Firstname=By.xpath("//input[@id='FirstName']");
 By Lastname=By.xpath("//input[@id='LastName']");
 By Gender_male=By.xpath("//input[@id='Gender_Male']");
 By Gender_female=By.xpath("//input[@id='Gender_Female']");
 By calender=By.xpath("//input[@id='DateOfBirth']");
 By cmpnyname=By.xpath("//input[@id='Company']");
 By vendor=By.xpath("//*[@id='VendorId']");
 By admin_con=By.xpath("//*[@id='AdminComment']");
 By cutomerlist=By.xpath("//div[@class='k-widget k-multiselect k-multiselect-clearable']//following::div[@class='k-multiselect-wrap k-floatwrap']");
 By listadmin=By.xpath("//li[contains(text(),'Administrators')]");
 By guest=By.xpath("//li[contains(text(),'Guests')]");
 By vendors=By.xpath("//li[contains(text(),'Vendors')]");
 By Registered=By.xpath("//li[contains(text(),'Vendors')]");
 By save_btn=By.xpath("//button[@name='save']");
 
 //Action methods
 public void clickcustomermenu()
 {
	 ldriver.findElement(cutomer_menu).click();
 }
 
 public void clickcustomersmenu()
 {
	 ldriver.findElement(customers_menu).click();
 }
 
 public void addnew()
 {
	 ldriver.findElement(add_btn).click();
 }
 public void setemail(String email)
 {
	 ldriver.findElement(mail).sendKeys(email);
 }
 public void setpassword(String pwd)
 {
	 ldriver.findElement(Password).sendKeys(pwd); 
	 }
 public void setcutomerlist(String role)
 {
	 if(!role.equals("Vendors"))
	 {
		 ldriver.findElement(By.xpath(xpathExpression))
	 }
 }
}
