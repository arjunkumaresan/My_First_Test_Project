package Stepdefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import Pageobjects.Loginpage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Loginsteps {

	public WebDriver driver;
	public Loginpage pg;
	
	@Given("^User launch chrome browser$")
	public void user_launch_chrome_browser() throws Throwable {
	    System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"//Drivers/chromedriver.exe");
	    driver=new ChromeDriver();
	    pg=new Loginpage(driver);
	}

	@When("^User opens URL \"([^\"]*)\"$")
	public void user_opens_URL(String url) throws Throwable {
		driver.get(url);
	    
	}

	@When("^User enters Email as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
	public void user_enters_Email_as_and_Password_as(String Email, String Password) throws Throwable {
	   Thread.sleep(3000);
		pg.setusername(Email);
	   pg.setpassword(Password);
	}

	@When("^Click on login$")
	public void click_on_login() throws Throwable {
	    pg.clicklogin();
	}

	@Then("^page title should be \"([^\"]*)\"$")
	public void page_title_should_be(String title) throws Throwable {
		String pagetitle=driver.getTitle();
		System.out.println(pagetitle);
	    if(driver.getPageSource().contains("Login was unsuccessful"))
	    {
	    	driver.close();
	    	Assert.assertTrue(false);
	    }
	    else
	    {
	    	Assert.assertEquals(title, pagetitle);
	    }
	}

	@When("^User click on Log out link$")
	public void user_click_on_Log_out_link() throws Throwable {
	    pg.clicklogout();
	    Thread.sleep(2000);
	}

	@Then("^Page Title should be \"([^\"]*)\"$")
	public void page_Title_should_be(String Logintitle) throws Throwable {
		String logintitle=driver.getTitle();
		System.out.println(logintitle);
	    if(driver.getPageSource().contains("Login was unsuccessful"))
	    {
	    	driver.close();
	    	Assert.assertTrue(false);
	    }
	    else
	    {
	    	Assert.assertEquals(Logintitle, logintitle);
	    }
	}

	@Then("^Close browser$")
	public void close_browser() throws Throwable {
	   driver.close();
	}
}
