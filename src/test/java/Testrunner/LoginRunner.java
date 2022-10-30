package Testrunner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features="Features/Login.feature",glue="",dryRun=false,monochrome=true,
plugin={"pretty"
,"html:Test-report"})
public class LoginRunner {

}
