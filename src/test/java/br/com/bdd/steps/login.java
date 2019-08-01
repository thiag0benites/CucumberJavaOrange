package br.com.bdd.steps;

import java.util.List;
import org.openqa.selenium.WebDriver;
import br.com.bdd.config.hooks;
import br.com.bdd.pages.LoginPage;
import cucumber.api.DataTable;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.E;
import cucumber.api.java.pt.Entao;

public class login {
	
	private WebDriver driver;
	protected LoginPage page;
	
	public login() {
		this.driver = hooks.GetDriver();
		page = new LoginPage(this.driver);
	}
	
	@Dado("^que acesso a url \"([^\"]*)\"$")
	public void que_acesso_a_url(String url) throws Throwable {
		System.out.println("Dado que acesso a url " + url);
		
		driver.navigate().to(url);
	}

	@Dado("^que digito o usuario e senha$")
	public void digito_o_usuario_e_senha_corretamente(DataTable dt) throws Throwable {
		System.out.println("Dado que digito o usuario e senha");
		List<String> data = dt.asList(String.class);

		page.txtUser.sendKeys(data.get(0));
		page.txtPass.sendKeys(data.get(1));
	}

	@E("^clico em login$")
	public void clico_em_login() throws Throwable {
		System.out.println("E clico em login");
		
		page.btnLogin.click();
	}

	@Entao("^acesso o sistema com sucesso$")
	public void acesso_o_sistema_com_sucesso() throws Throwable {
		System.out.println("Entao acesso o sistema com sucesso");

		page.checkLogin();
	}
	
	@Entao("^valido a mensagem de erro \"([^\"]*)\"$")
	public void valido_a_mensagem_de_erro(String ExpectedMsg) throws Throwable {
		System.out.println("Entao valido a mensagem de erro " + ExpectedMsg);
		
		page.checkMsgErrorLogin(ExpectedMsg);
		
	}
}