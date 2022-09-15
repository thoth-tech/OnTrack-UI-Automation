require("chromedriver");

const { Builder, By, Key } = require("selenium-webdriver");
var assert = require("chai").assert;

describe("Test001", () => {
  it.only("Login As Admin", async function () {
    let AdminUser = "aadmin";
    let pass = "password";
    let driver = new Builder().forBrowser("chrome").build();
    await driver.get("http://180.150.50.17:4200/#/sign_in");

    await driver.findElement(By.name("username")).sendKeys(AdminUser);
    await driver.findElement(By.name("password")).sendKeys(pass);
    await driver.findElement(By.xpath("//button[@type='submit']")).click();
  });

  it("Login as Tutor", async function () {
    let AdminUser = "atutor";
    let pass = "password";
    let driver = new Builder().forBrowser("chrome").build();
    await driver.get("http://180.150.50.17:4200/#/sign_in");

    await driver.findElement(By.name("username")).sendKeys(AdminUser);
    await driver.findElement(By.name("password")).sendKeys(pass);
    await driver.findElement(By.xpath("//button[@type='submit']")).click();
  });

  it("Login as Convenor", async function () {
    let AdminUser = "aconvenor";
    let pass = "password";
    let driver = new Builder().forBrowser("chrome").build();
    await driver.get("http://180.150.50.17:4200/#/sign_in");

    await driver.findElement(By.name("username")).sendKeys(AdminUser);
    await driver.findElement(By.name("password")).sendKeys(pass);
    await driver.findElement(By.xpath("//button[@type='submit']")).click();
  });

  it("Login as Student", async function () {
    let AdminUser = "student_1";
    let pass = "password";
    let driver = new Builder().forBrowser("chrome").build();
    await driver.get("http://180.150.50.17:4200/#/sign_in");

    await driver.findElement(By.name("username")).sendKeys(AdminUser);
    await driver.findElement(By.name("password")).sendKeys(pass);
    await driver.findElement(By.xpath("//button[@type='submit']")).click();
  });
});
