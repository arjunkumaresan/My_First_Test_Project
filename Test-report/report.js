$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "test the login feature",
  "description": "",
  "id": "test-the-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Successfull login with valid credentials",
  "description": "",
  "id": "test-the-login-feature;successfull-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Loginsteps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 2886050500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Loginsteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 2446355700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Loginsteps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 3219467000,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.click_on_login()"
});
formatter.result({
  "duration": 5600448600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Loginsteps.page_title_should_be(String)"
});
formatter.result({
  "duration": 60787400,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.user_click_on_Log_out_link()"
});
formatter.result({
  "duration": 3984416300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Loginsteps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 17797900,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.close_browser()"
});
formatter.result({
  "duration": 16263090600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Login data driven",
  "description": "",
  "id": "test-the-login-feature;login-data-driven",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters Email as \"\u003cEmail\u003e\" and Password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "test-the-login-feature;login-data-driven;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 26,
      "id": "test-the-login-feature;login-data-driven;;1"
    },
    {
      "cells": [
        "man@yourstore.com",
        "1234"
      ],
      "line": 27,
      "id": "test-the-login-feature;login-data-driven;;2"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 28,
      "id": "test-the-login-feature;login-data-driven;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Login data driven",
  "description": "",
  "id": "test-the-login-feature;login-data-driven;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters Email as \"man@yourstore.com\" and Password as \"1234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Loginsteps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 654770000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Loginsteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 2083515400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "man@yourstore.com",
      "offset": 22
    },
    {
      "val": "1234",
      "offset": 58
    }
  ],
  "location": "Loginsteps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 3236335000,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.click_on_login()"
});
formatter.result({
  "duration": 1602232200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Loginsteps.page_title_should_be(String)"
});
formatter.result({
  "duration": 16293938200,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat Stepdefinitions.Loginsteps.page_title_should_be(Loginsteps.java:49)\r\n\tat ✽.Then page title should be \"Dashboard / nopCommerce administration\"(Features/Login.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Loginsteps.user_click_on_Log_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Loginsteps.page_Title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Loginsteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "Login data driven",
  "description": "",
  "id": "test-the-login-feature;login-data-driven;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User click on Log out link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Page Title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Loginsteps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 709938000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Loginsteps.user_opens_URL(String)"
});
formatter.result({
  "duration": 1610679000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Loginsteps.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 3257503300,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.click_on_login()"
});
formatter.result({
  "duration": 4668963400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Loginsteps.page_title_should_be(String)"
});
formatter.result({
  "duration": 42837600,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.user_click_on_Log_out_link()"
});
formatter.result({
  "duration": 3965681500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Loginsteps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 21752600,
  "status": "passed"
});
formatter.match({
  "location": "Loginsteps.close_browser()"
});
formatter.result({
  "duration": 16267118600,
  "status": "passed"
});
});