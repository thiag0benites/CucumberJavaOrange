package br.com.bdd.steps;


import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import br.com.bdd.config.hooks;
import cucumber.api.DataTable;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Entao;


public class login {
	
	private WebDriver driver;
	
	public login() {
		this.driver = hooks.GetDriver();
	}
	
	@Dado("^que acesso a url \"([^\"]*)\"$")
	public void que_acesso_a_url(String url) throws Throwable {
		System.out.println("Dado que acesso a url " + url);
		driver.navigate().to(url);
	}

	@Dado("^digito o usuario e senha corretamente$")
	public void digito_o_usuario_e_senha_corretamente(DataTable dt) throws Throwable {
		List<String> data = dt.asList(String.class);
		driver.findElement(By.id("txtUsername")).sendKeys(data.get(0));
		driver.findElement(By.id("txtPassword")).sendKeys(data.get(1));
	}

	@E("^clico em login$")
	public void clico_em_login() throws Throwable {
		driver.findElement(By.id("btnLogin")).click();
	}

	@Entao("^acesso o sistema com sucesso$")
	public void acesso_o_sistema_com_sucesso() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.elementToBeClickable(By.id("welcome")));
	}
}
