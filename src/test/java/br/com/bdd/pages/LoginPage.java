package br.com.bdd.pages;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage {
	
	protected WebDriver driver;
	private WebDriverWait wait;

	public LoginPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
		wait = new WebDriverWait(driver, 10);
	}
	
	//@FindBy(how = How.NAME, using = "q")
	@FindBy(id="txtUsername")
	public WebElement txtUser;
	
	@FindBy(id="txtPassword")
	public WebElement txtPass;
	
	@FindBy(id="btnLogin")
	public WebElement btnLogin;
	
	@FindBy(id="welcome")
	public WebElement lblLogin;
	
	@FindBy(id="spanMessage")
	public WebElement spanMessage;
	
	public void checkLogin() {
		wait.until(ExpectedConditions.elementToBeClickable(lblLogin));
	}
	
	public void checkMsgErrorLogin(String ExpectedMsg) {
		wait.until(ExpectedConditions.elementToBeClickable(spanMessage));
		assertEquals(spanMessage.getText(), ExpectedMsg);
	}
}